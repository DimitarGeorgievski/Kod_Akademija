import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './orders/order.model';
import { Model } from 'mongoose';

const FK_PG_CODE = '23503';

@Injectable()
export class OrdersService {
constructor(@InjectModel(Order.name) private ordersModel: Model<Order>){}
  async create(userId: string,createOrderDto: CreateOrderDto) {
    const newOrder = new this.ordersModel({...createOrderDto, user: userId});
    const createdOrder = await newOrder.save();
    return createdOrder;
  }

  findAll() {
    return this.ordersModel.find({});
  }

  async findOne(id: number) {
  try {
    const order = await this.ordersModel.findById(id).populate("products");
    if(!order) throw new Error()
    return order;
  } catch (error) {
    throw new NotFoundException("Order doesnt exist")
  }
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    
  }

  remove(id: number) {
    
  }
}
