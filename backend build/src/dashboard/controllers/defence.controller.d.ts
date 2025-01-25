import { DefenceService } from '../services/defence.service';
import { Defence } from '../entities/defence.entity';
import { StudentService } from '../services/student.service';
export declare class DefenceController {
    private readonly defenceService;
    private readonly studentService;
    constructor(defenceService: DefenceService, studentService: StudentService);
    create(defence: Defence): Promise<Defence>;
    findAll(): Promise<Defence[]>;
    findOne(id: number): Promise<Defence>;
    update(id: number, defence: Defence): Promise<void>;
    delete(ids: {
        id: number;
    }[]): Promise<void>;
}
