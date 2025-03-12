import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const filePathDirectory = path.dirname(currentFilePath);
const productsPath = path.join(
  filePathDirectory,
  "..",
  "data",
  "products.json"
);
export default class ProductsModel {
  static async getAll() {
    return await DataService.readData(productsPath);
  }
  static async getById(id) {
    const products = await DataService.readData(productsPath);
    const foundProduct = products.find((product) => product.id === id);
    return foundProduct;
  }
  static async create(body) {
      const products = await this.getAll(); // mora da ima this bidejki pristapuva od klasa
      products.push(body);
      await DataService.writeData(productsPath, products);
      return body;
    }
    static async update(id,body) {
        const products = await this.getAll();
        const index = products.findIndex((product) => product.id === id);
        if(index === -1){
            throw new Error("Product not found");
        }
        products[index] = body;
        await DataService.writeData(productsPath, products);
        return body;
    }
    static async delete(id) {
      const products = await this.getAll();
      const filteredProducts = products.filter((product) => product.id !== id); // gi vraka site elementi osven toj so go ima id-to
      await DataService.writeData(productsPath, filteredProducts)
    }
}
