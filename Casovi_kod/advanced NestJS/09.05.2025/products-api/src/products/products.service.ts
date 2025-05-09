import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productsRepo: Repository<Product>){}
    async findAll(){
        return this.productsRepo.find();
    }
    async getById(id: number){
        const foundProduct = await this.productsRepo.findOneBy({id})
        if(!foundProduct) throw new NotFoundException("Product not found");
    }
    async create( body: CreateProductDto){
        return this.productsRepo.save(body);
    }
    // async delete(id:number){
    //     const foundProduct = await this.getById(id);
    //     await this.productsRepo.remove(foundProduct);
    // }
    // async updateProduct(id: number, data: UpdateProductDto){
    //     const foundProduct = await this.getById(id);
    //     Object.assign(foundProduct, data);
    // }
}
