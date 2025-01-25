import { Repository } from 'typeorm';
import { Jury } from '../entities/jury.entity';
export declare class JuryService {
    private juryRepository;
    constructor(juryRepository: Repository<Jury>);
    create(jury: Jury): Promise<Jury>;
    findAll(): Promise<Jury[]>;
    findOne(id: number): Promise<Jury>;
    update(id: number, jury: Jury): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(ids: number[]): Promise<void>;
}
