import { IsArray, IsDateString, IsNumber, isString, IsString, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @Min(0)
  totalAmount: number;
  @IsDateString()
  date: string;
  @IsString()
  userId: string;
  @IsArray()
  @IsString({ each: true})
  products: string[];
}
