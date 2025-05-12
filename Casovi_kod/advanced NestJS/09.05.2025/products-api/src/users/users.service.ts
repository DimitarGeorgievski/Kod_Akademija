import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from 'src/products/dtos/create-product.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

const DUPLICATE_PG_CODE = "23035";
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async findAll() {
    return this.userRepo.find();
  }
  async findById(id: string) {
    try {
        const foundUser = await this.userRepo.findOneByOrFail({id});
        return foundUser;
    } catch (error) {
        throw new NotFoundException("User not found")
    }
  }
  async findUserDetails(id: string){
    const foundUser = await this.userRepo.findOne({
      where: {id},
      relations: {
        userAddress: true,
        orders: true,
      }
    });
    if(!foundUser) throw new NotFoundException("User not found");
    return foundUser;
  }
  async create(createData: CreateUserDto){
    try {
    const newUser = await this.userRepo.save(createData);
    return newUser;
    } catch (error) {
        if(error.code === DUPLICATE_PG_CODE){
            throw new BadRequestException("Email is taken");
        }
        throw new InternalServerErrorException(error.message)
    }
  }
  async updateUser(id: string, updateData: UpdateUserDto){
    try {
    const foundUser = await this.findById(id);
    Object.assign(foundUser,updateData);
    await this.userRepo.save(foundUser);
    } catch (error) {
        if(error.code === DUPLICATE_PG_CODE){
            throw new BadRequestException("Email is taken");
        }
        throw new InternalServerErrorException(error.message)
    }
  }
  async delete(id:string){
    const foundUser = await this.findById(id);
    await this.userRepo.remove(foundUser);
  }
}
