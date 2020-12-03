import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { UsersModule } from '../users/users.module';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Game]),
  UsersModule,AuthModule],
  controllers: [GamesController],
  providers: [GamesService,AuthService],
  exports: [GamesService]
})
export class GamesModule {}
