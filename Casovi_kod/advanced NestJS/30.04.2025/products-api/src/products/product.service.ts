import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  private PRODUCTS_PATH = join(
    process.cwd(),
    'src',
    'products',
    'data',
    'products.json',
  );
  async getAllProducts() {
    const productsJson = await readFile(this.PRODUCTS_PATH, "utf-8");
    const products = JSON.parse(productsJson) as Product[];
    return products;
  }
  async getProductById(id: string){
    const products = await this.getAllProducts();
    const foundProduct = products.find(product => product.id === id);
    if(!foundProduct) throw new NotFoundException("product not found");
    return foundProduct;
  }
}
