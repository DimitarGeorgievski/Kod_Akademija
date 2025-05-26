import { Type } from "class-transformer";
import { IsIn, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class ProductFiltersDto{
    @IsOptional()
    @IsString()
    title: string
    @IsOptional()
    @IsIn(["true", "false"])
    inStock: "true" | "false"
    @IsOptional()
    @IsIn(["price", "stock"])
    orderBy: "price" | "stock";
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    minPrice: number;
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    maxPrice: number;
    @Type(() => Number)
    @Min(1)
    @Max(100)
    @IsNumber()
    maxResults: number;
    @Type(() => Number)
    @Min(1)
    @IsNumber()
    firstResult: number;
}