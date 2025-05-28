import { Global, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './models/user.model';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: userSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
