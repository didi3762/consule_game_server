import { DatabaseService } from './database.service';
import { CreateDatabaseInput } from './dto/create-database.input';
import { UpdateDatabaseInput } from './dto/update-database.input';
export declare class DatabaseResolver {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createDatabaseInput: CreateDatabaseInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateDatabaseInput: UpdateDatabaseInput): string;
    remove(id: number): string;
}
