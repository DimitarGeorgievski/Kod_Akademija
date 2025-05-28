import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserAddressService } from 'src/user-address/user-address.service';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const DUPLICATE_PG_CODE = '23505';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private userAddressService: UserAddressService,
  ) {}

  findAll() {
    
  }

  async findById(id: string) {
    
  }

  async findByEmail(email: string) {
    
  }

  async findUserDetails(id: string) {
    
  }

  async create(createData: CreateUserDto) {
    
  }

  async updateUser(id: string, updateData: UpdateUserDto) {
    
  }
  async saveRefreshToken(id:string, refreshTokens: string){
    
  }
  async deleteRefreshTOken(id: string, refreshTokens: string){
   
  }
  async deleteUser(id: string) {
  
  }   
}
