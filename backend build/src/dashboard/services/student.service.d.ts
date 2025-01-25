import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(student: Student): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, student: Student): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(ids: number[]): Promise<void>;
    findStudentsWithoutDefence(departmentId: number): Promise<Student[]>;
}
