import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateProductDto } from "./create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto){}