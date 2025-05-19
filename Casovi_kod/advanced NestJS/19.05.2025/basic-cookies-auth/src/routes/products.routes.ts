import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";
import { joiValidator } from "../middleware/joi-validator.middleware";
import { CreateProductSchema, updateProductSchema } from "../const/joi-schemas.const";

export const productsRouter = Router();

productsRouter.get("/", ProductsController.getAllProducts);
productsRouter.get("/:id", ProductsController.getProductById);
productsRouter.post("/",joiValidator(CreateProductSchema, "couldn't create product, invalid product data"), ProductsController.createProduct);
productsRouter.patch("/:id",joiValidator(updateProductSchema), ProductsController.updateProduct);
productsRouter.delete("/:id", ProductsController.deleteProduct);
