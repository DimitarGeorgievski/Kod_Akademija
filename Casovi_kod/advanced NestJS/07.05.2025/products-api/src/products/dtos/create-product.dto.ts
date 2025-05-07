import { IsArray, IsNumber, IsObject, IsString, Length, Min, ValidateNested } from "class-validator";
import { ProductDetailsDto } from "./product-details.dto";
import { Type } from "class-transformer";
import { ApiOAuth2, ApiProperty, ApiQuery } from "@nestjs/swagger";

export class CreateProductDto{
    @ApiProperty({
        description: "title of the product",
        example: "shoes"
    })
    @IsString()
    @Length(3,30)
    title: string;
    @ApiProperty({
        description: "starting stock",
        minimum: 0,
        example: 300
    })
    @IsNumber()
    @Min(0)
    stock: number;
    @ApiProperty({
        description: "starting product price",
        examples: [123.33,21.99,23.99],
        minimum: 1,
    })
    @IsNumber()
    @Min(1)
    price: number;
    @ApiProperty({
        description: "tags for the product",
        minItems: 1,
        example: ["kitchen", "small", "appliances"]
    })
    @IsArray()
    @IsString({each: true})
    tags: string[];
    @ApiProperty()
    @IsObject()
    @ValidateNested()
    @Type(() => ProductDetailsDto)
    details: ProductDetailsDto;
}