import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Game } from 'src/games/entities/game.entity';
import { Score } from '../../score/entities/score.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    sum_score?:number;
    scores?:Score[];

}
