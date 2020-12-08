import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersRepository } from './users/users.repository';
import { GamesModule } from './games/games.module';
import { Game } from './games/entities/game.entity';
import { ConfigModule } from '@nestjs/config'
import { AppGateway } from './app.gateway';
import { MulterModule } from '@nestjs/platform-express';
import { ScoreModule } from './score/score.module';
import { Score } from './score/entities/score.entity';

@Module({
  imports: [
    UsersModule,
     DatabaseModule, 
     AuthModule,
     ConfigModule.forRoot({isGlobal:true}),
     TypeOrmModule.forRoot({
    type: 'postgres',
    url:"postgres://yohiqixrmcvqqw:45f3a5bd4167278c4398450d025e5bd5c65a15ef83a8cce14b67f9d579505e6f@ec2-50-19-247-157.compute-1.amazonaws.com:5432/dco9dqo9sgrin1",
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: 'postgres',
    // database: 'GamingConsole',
    logging:true,
    entities: [User,Game,Score],
    synchronize: true,
  }),
  // TypeOrmModule.forFeature([User,UsersRepository]),
  // MulterModule.register({dest: './uploads'}),
  GamesModule,
  ScoreModule,
 
],
  controllers: [AppController],
  providers: [AppService,UsersRepository,
    //  AppGateway
    ],
  exports : [DatabaseModule]
})
export class AppModule {}
