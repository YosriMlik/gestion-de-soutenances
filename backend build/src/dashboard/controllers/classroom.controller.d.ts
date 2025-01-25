import { ClassroomService } from '../services/classroom.service';
import { Classroom } from '../entities/classroom.entity';
export declare class ClassroomController {
    private readonly classroomService;
    constructor(classroomService: ClassroomService);
    create(classroom: Classroom): Promise<Classroom>;
    findAll(): Promise<Classroom[]>;
    findOne(id: number): Promise<Classroom>;
    update(id: number, classroom: Classroom): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(body: {
        ids: number[];
    }): Promise<{
        message: string;
    }>;
}
