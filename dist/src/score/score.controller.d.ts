import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    create(createScoreDto: CreateScoreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateScoreDto: UpdateScoreDto): string;
    remove(id: string): string;
}
