import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './interfaces/products.interface';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ProductDto } from './dtos/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private loggerService: LoggerService,
  ) {}
  @Get()
  @ApiQuery({ name: 'title', required: false })
  @ApiQuery({ name: 'inStock', required: false })
  @ApiQuery({ name: 'minPrice', required: false })
  @ApiQuery({ name: 'maxPrice', required: false })
  @ApiOperation({ summary: 'endpoint that fatches all products' })
  @ApiOkResponse({ type: ProductDto, isArray: true })
  @ApiInternalServerErrorResponse({
    description: "the server coudn't fetch the products",
  })
  getAllProducts(
    @Query('title') title: string,
    @Query('inStock') inStock: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string,
  ) {
    const productFilters: ProductFilters = {
      title,
      inStock: !!inStock,
      minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null,
      maxPrice: !Number.isNaN(Number(maxPrice)) ? Number(maxPrice) : null,
    };
    this.loggerService.addLog('products fetched');

    return this.productsService.getAllProducts(productFilters);
  }
  @Get(':id')
  @ApiOperation({ summary: 'endpoint that fatches all products by id' })
  @ApiOkResponse({ type: ProductDto, isArray: true })
  getProductById(@Param('id') productId: string) {
    return this.productsService.getProductById(productId);
  }
  @Post()
  @ApiOperation({ summary: 'endpoint that creates a product' })
  createProduct(@Body() createData: CreateProductDto) {
    return this.productsService.createProduct(createData);
  }
  @HttpCode(204)
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productsService.updateProduct(id, body);
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id: string, @Res() res: Response) {
    await this.productsService.deleteProduct(id);
    res.sendStatus(204);
  }
}
