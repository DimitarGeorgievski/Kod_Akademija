import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RoleType } from './roles.model';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const userRole = req.user.role as RoleType;
    const [classRole,handlerRole] = this.reflector.getAll(Roles, [
      context.getClass(),
      context.getHandler(),
    ]);
    const decoratorRole = handlerRole || classRole;
    if (!decoratorRole) {
      return true;
    }
    if (userRole !== decoratorRole) return false;
    return true;
  }
}
