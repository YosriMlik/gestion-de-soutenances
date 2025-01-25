import { StudentService } from '../services/student.service';
import { Student } from '../entities/student.entity';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(student: Student): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, student: Student): Promise<void>;
    delete(ids: {
        id: number;
    }[]): Promise<void>;
}
