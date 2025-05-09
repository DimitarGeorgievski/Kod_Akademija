import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PlayerDto } from './dtos/player.dto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { v4 as uuid } from 'uuid';
import { UpdatePlayerDto } from './dtos/update-player.dto';
import { SkillsService } from 'src/skills/skills.service';
import { SkillDto } from 'src/skills/dtos/skill.dto';

@Injectable()
export class PlayersService {
  constructor(private sklllsService: SkillsService) {}
  private PLAYERS_PATH = join(process.cwd(), 'data', 'players.json');

  async findAll() {
    const playersJSON = await readFile(this.PLAYERS_PATH, 'utf-8');

    const players = JSON.parse(playersJSON) as PlayerDto[];

    return players;
  }
  async getById(id: string){
    const players = await this.findAll();
    const player = players.find(player => player.id === id);
    if(!player) throw new NotFoundException("Player doesn't exist");
    return player;
  }
  async save(players: PlayerDto[]) {
    await writeFile(this.PLAYERS_PATH, JSON.stringify(players, null, 2));
  }

  async create(playerData: CreatePlayerDto) {
    const players = await this.findAll();

    const newPlayer: PlayerDto = {
      id: uuid(),
      skills: [],
      experience: 0,
      ...playerData,
    };

    players.push(newPlayer);

    await this.save(players);
    return newPlayer;
  }
  async update(id: string, body: UpdatePlayerDto){ // ova e so mutiranje na nizata,no pobrzo
    const players = await this.findAll();
    const playerIndex = players.findIndex(player => player.id === id);
    if(playerIndex === -1) throw new NotFoundException("Player not found");
    players[playerIndex] = {...players[playerIndex], ...body};
    await this.save(players); 
  }
  async delete(id: string){
    const players = await this.findAll();
    const player = players.filter(player => player.id !== id);
    if(players.length === player.length) throw new NotFoundException("Player doesn't exist");
    await this.save(player);
  }
  async addSkill(id: string, skillId: string){
    const foundPlayer = await this.getById(id);
    const foundSKill = await this.sklllsService.getById(skillId);
    foundPlayer.skills.push(foundSKill.id);
    const players = await this.findAll();
    const updatedPlayers = players.map(player => player.id === foundPlayer.id ? foundPlayer : player);
    await this.save(updatedPlayers);
    return {
      msg: `Skill: "${foundSKill}" was successsfully added to player:"${foundPlayer}"`
    }
}
  async findSkills(id:string){
    const foundPlayer = await this.getById(id);
    const playerSkills: SkillDto[] = [];
    for(let skillId of foundPlayer.skills){
      const skill = await this.sklllsService.getById(skillId);
      playerSkills.push(skill);
    }
    return playerSkills;
  }
}