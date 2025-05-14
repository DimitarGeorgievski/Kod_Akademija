import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

const FK_PG_CODE = 23505
@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private ordersRepo: Repository<Order>) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      const newOrder = await this.ordersRepo.save({
      ...createOrderDto,
      user: {
        id: createOrderDto.userId,
      },
      products: createOrderDto.products.map((id) => ({ id })),
    });
    return newOrder;
    } catch (error) {
      if(error.code === FK_PG_CODE){
        throw new BadRequestException(" Invalid references added")
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  findAll() {
    return this.ordersRepo.find({
      loadEagerRelations: false,
    });
  }

  async findOne(id: string) {
    const foundOrder = await this.ordersRepo.findOne({
      // so ova mozi da se praj so ova where i relaci da se kalva
      where: { id },
      relations: {
        user: true,
        products: true,
      },
    });
    if (!foundOrder) throw new NotFoundException('Order not found');
    return foundOrder;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
