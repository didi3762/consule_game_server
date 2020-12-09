import { CreateUserDto } from './create-user.dto';
import { Score } from '../../score/entities/score.entity';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    sum_score?: number;
    scores?: Score[];
}
export {};
