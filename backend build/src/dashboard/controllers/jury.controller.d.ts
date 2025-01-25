import { JuryService } from '../services/jury.service';
import { Jury } from '../entities/jury.entity';
export declare class JuryController {
    private readonly juryService;
    constructor(juryService: JuryService);
    create(jury: Jury): Promise<Jury>;
    findAll(): Promise<Jury[]>;
    findOne(id: number): Promise<Jury>;
    update(id: number, jury: Jury): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(body: {
        ids: number[];
    }): Promise<{
        message: string;
    }>;
}
