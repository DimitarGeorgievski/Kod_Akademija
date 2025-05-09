import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdatePlayerDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  health: number;
  @IsOptional()
  @IsNumber()
  @Min(0)
  mana: number;
  @IsOptional()
  @IsNumber()
  @Min(5)
  attack: number;
  @IsOptional()
  @IsNumber()
  @Min(3)
  defense: number;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  inventory: string[];
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(70)
  level: number;
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  experience: number;
}
