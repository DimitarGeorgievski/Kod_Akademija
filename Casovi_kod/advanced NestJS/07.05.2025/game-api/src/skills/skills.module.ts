import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';

@Module({
  exports: [SkillsService], // servisot mora da se exportira
  providers: [SkillsService],
  controllers: [SkillsController]
})
export class SkillsModule {}
