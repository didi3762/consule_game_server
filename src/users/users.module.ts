import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from '.././auth/auth.module';
import { AppGateway } from '../app.gateway';
import { GamesService } from '../games/games.service';
import { Game } from '../games/entities/game.entity';
import { GamesModule } from '../games/games.module';

@Module({
  imports: [TypeOrmModule.forFeature([User,UsersRepository,Game]),
  AuthModule],
  controllers: [UsersController],
  providers: [UsersService,UsersRepository,AppGateway],
  exports : [UsersRepository,UsersService]
})
export class UsersModule {}
