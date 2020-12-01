import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';


@Module({
  imports: [],
  providers: [DatabaseService]
})
export class DatabaseModule {}
