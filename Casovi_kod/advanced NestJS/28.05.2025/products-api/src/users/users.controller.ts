import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { RoleType } from 'src/auth/roles.model';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(AuthGuard,RolesGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Roles(RoleType.ADMIN)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get(':id/details')
  findDetails(@Param('id') id: string) {
    return this.usersService.findUserDetails(id);
  }

  @Post()
  create(@Body() createData: CreateUserDto) {
    return this.usersService.create(createData);
  }

  @HttpCode(204)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    return this.usersService.updateUser(id, updateData);
  }

  @HttpCode(204)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
