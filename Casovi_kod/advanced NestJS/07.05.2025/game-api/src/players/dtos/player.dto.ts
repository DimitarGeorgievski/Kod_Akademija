import { IsNumber, IsString, Min } from 'class-validator';
import { CreatePlayerDto } from './create-player.dto';

export class PlayerDto extends CreatePlayerDto {
  id: string;
  @IsString({each: true})
  skills: string[];
  @IsNumber()
  @Min(1)
  experience: number;
}