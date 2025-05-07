import { ApiProperty } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";

export class ProductDto extends CreateProductDto{
    @ApiProperty({
        description:"the id of the project, a valid v4uuid",
        example: "e8ff5d3c-1f54-44f4-85a1-7db0b916440f"
    })
    id: string;
}