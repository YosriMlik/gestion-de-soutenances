import { Repository } from 'typeorm';
import { Classroom } from '../entities/classroom.entity';
export declare class ClassroomService {
    private classroomRepository;
    constructor(classroomRepository: Repository<Classroom>);
    create(classroom: Classroom): Promise<Classroom>;
    findAll(): Promise<Classroom[]>;
    findOne(id: number): Promise<Classroom>;
    update(id: number, classroom: Classroom): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(ids: number[]): Promise<void>;
}
