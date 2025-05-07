import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PlayerDto } from './dtos/player.dto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import {v4 as uuid} from "uuid"

@Injectable()
export class PlayersService {
    private PLAYERS_PATH = join(process.cwd(), "data", "players.json")
    async findAll(){
       const playersJSON = await readFile(this.PLAYERS_PATH, "utf-8");
        const players = JSON.parse(playersJSON) as PlayerDto[];
        return players;
    }
    async findById(id: string){
        const players = await this.findAll();
        const player = players.find(player => player.id === id);
        
    }
    async save(players: PlayerDto[]){
        await writeFile(this.PLAYERS_PATH, JSON.stringify(players,null,2), "utf-8")
    }
    async create(body: CreatePlayerDto){
        const players = await this.findAll();
        const newPlayer: PlayerDto = {
            id: uuid(),
            skills: [],
            experience: 0,
            ...body
        }
        players.push(newPlayer);
        await this.save(players);
    }
}
