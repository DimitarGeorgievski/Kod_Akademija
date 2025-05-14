import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
    @Get()
    findAll(){
        return this.productsService.findAll()
    }
    @Post()
    create(@Body() body: CreateProductDto){
        return this.productsService.create(body)
    }
    @Get(":id")
    getById(@Param("id") id:string){
        if(Number.isNaN(Number(id))) throw new BadRequestException("invalid id only numbers allowed");
        return this.productsService.findById(id);
    }
    @Get("/:id/orders")
    findProductOrders(@Param(":id") id:string){
        return this.productsService.findOrders(id);
    }
    @HttpCode(204)
    @Delete(":id")
    delete(@Param("id") id: string){
        if(Number.isNaN(Number(id))) throw new BadRequestException("invalid id only numbers allowed");
        return this.productsService.delete(id);
    }
}
