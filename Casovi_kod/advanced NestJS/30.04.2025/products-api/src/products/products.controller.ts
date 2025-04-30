import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./product.service";
import { Product } from "./interfaces/products.interface";


@Controller("products")
export class ProductsController{
    constructor(private productsService: ProductsService){}
    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts();
    }
    @Get(":id")
    getProductById(@Param("id") productId: string){
        return this.productsService.getProductById(productId);
    }
} 