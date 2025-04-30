import { Injectable } from '@nestjs/common';
import { User } from './user.inerface';

@Injectable()
export class AppService {
  users: User[] =[];

  getHello(): string {
    return 'Hello World!';
  }
  getFullName():string {
    return 'Dimitar Georgievski'
  }
  getUsers(): User[] {
    return this.users;
  }
  createUser(userData: User) {
    this.users.push(userData);
  } 
}
