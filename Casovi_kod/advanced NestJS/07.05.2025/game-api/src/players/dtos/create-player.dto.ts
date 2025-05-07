import { isArray, IsArray, IsNumber, isString, IsString, Length, Max, Min } from "class-validator" 

export class CreatePlayerDto{
    @IsNumber()
    @Length(3,30)
    name: string;
    @IsNumber()
    @Min(0)
    health:number;
    @IsNumber()
    @Min(0)
    mana: number;
    @IsNumber()
    @Min(1)
    attack: number;
    @IsNumber()
    @Min(3)
    defense: number;
    @IsArray()
    @IsString({each: true})
    inventory: string[];
    @IsNumber()
    @Min(1)
    @Max(70)
    level: number;
    @IsArray()
    @IsString({each: true})
    skill: string[];
}