import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
export declare class ScoreService {
    create(createScoreDto: CreateScoreDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateScoreDto: UpdateScoreDto): string;
    remove(id: number): string;
}
