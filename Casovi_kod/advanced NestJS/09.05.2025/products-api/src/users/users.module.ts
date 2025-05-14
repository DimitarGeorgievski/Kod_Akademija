import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserAddressModule } from 'src/user-address/user-address.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserAddressModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
