import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ProductFilters } from './interfaces/products.interface';
import { v4 as uuid } from 'uuid';
import { UpdateProductDto } from './dtos/update-product.dto';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
  private PRODUCTS_PATH = join(
    process.cwd(),
    'src',
    'products',
    'data',
    'products.json',
  );
  async getAllProducts(filters?: ProductFilters) {
    const productsJson = await readFile(this.PRODUCTS_PATH, 'utf-8');
    let products = JSON.parse(productsJson) as ProductDto[];
    if (filters?.title) {
      products = products.filter((product) =>
      product.title.toLowerCase().includes(filters.title?.toLowerCase() as string),
      );
    }
    if(filters?.inStock){
      products = products.filter(product => product.stock > 0);
    }
    if(filters?.minPrice){
      products = products.filter(product => product.price >= (filters.minPrice as number));
    }
    if(filters?.maxPrice){
      products = products.filter(product => product.price <= (filters.maxPrice as number));
    }
    return products;
  }
  async getProductById(id: string) {
    const products = await this.getAllProducts();
    const foundProduct = products.find((product) => product.id === id);
    if (!foundProduct) throw new NotFoundException('product not found');
    return foundProduct;
  }
  async saveProducts(products: ProductDto[]) {
    await writeFile(this.PRODUCTS_PATH, JSON.stringify(products, null, 2));
  }
  async createProduct(body: CreateProductDto) {
    const products = await this.getAllProducts();
    const newProduct: ProductDto = {
      id: uuid(),
      ...body,
    };
    products.push(newProduct);
    // const updatedProducts = [...products, newProduct] // nova varijanta mesto .push no najlesno e so push
    await this.saveProducts(products);
    return newProduct;
  }
  async updateProduct(id: string, body: UpdateProductDto) {
    const products = await this.getAllProducts();
    const foundProduct = products.find((product) => product.id === id);
    if (!foundProduct) throw new NotFoundException('Product not found');
    const updateProduct = products.map((product) =>
      product.id === id ? { ...product, ...body } : product,
    );
    await this.saveProducts(updateProduct);
  }
  async deleteProduct(id: string) {
    const products = await this.getAllProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    if (products.length === updatedProducts.length)
      throw new NotFoundException('Product doesnt exist');
    await this.saveProducts(updatedProducts);
  }
}
