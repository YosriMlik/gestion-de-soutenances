import { Repository } from 'typeorm';
import { Defence } from '../entities/defence.entity';
export declare class DefenceService {
    private defenceRepository;
    constructor(defenceRepository: Repository<Defence>);
    create(defence: Defence): Promise<Defence>;
    findAll(): Promise<Defence[]>;
    findOne(id: number): Promise<Defence>;
    update(id: number, defence: Defence): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(ids: number[]): Promise<void>;
}
