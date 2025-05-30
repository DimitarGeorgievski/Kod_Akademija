import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserAddressService } from 'src/user-address/user-address.service';

const DUPLICATE_PG_CODE = '23035';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>, private userAddressService: UserAddressService){}
  async findAll() {
    return this.userRepo.find();
  }
  async findById(id: string) {
    try {
      const foundUser = await this.userRepo.findOneByOrFail({ id });
      return foundUser;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
  async findUserDetails(id: string) {
    const foundUser = await this.userRepo.findOne({
      where: { id },
      relations: {
        userAddress: true,
        orders: true,
      },
    });
    if (!foundUser) throw new NotFoundException('User not found');
    return foundUser;
  }
  async findUserProducts(id: string) {
    const foundUser = await this.userRepo.findOne({
      where: { id },
      relations: {
        orders: {
          products: true,
        },
      },
    });
    if (!foundUser) throw new NotFoundException('User not found');
    return foundUser;
  }
  async create(createData: CreateUserDto) {
    try {
      const { userAddress, ...userData} = createData;
      const newUser = await this.userRepo.save(userData);
      await this.userAddressService.create({...userAddress, user: newUser.id})
      return newUser;
    } catch (error) {
      if (error.code === DUPLICATE_PG_CODE) {
        throw new BadRequestException('Email is taken');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
  async updateUser(id: string, updateData: UpdateUserDto) {
    try {
      const foundUser = await this.findById(id);
      Object.assign(foundUser, updateData);
      await this.userRepo.save(foundUser);
    } catch (error) {
      if (error.code === DUPLICATE_PG_CODE) {
        throw new BadRequestException('Email is taken');
      }
      throw new InternalServerErrorException(error.message);
    }
  }
  async delete(id: string) {
    const foundUser = await this.findById(id);
    await this.userRepo.remove(foundUser);
  }
}
