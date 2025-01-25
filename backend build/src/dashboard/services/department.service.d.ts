import { Repository } from 'typeorm';
import { Department } from '../entities/department.entity';
import { Defence } from '../entities/defence.entity';
import { Student } from '../entities/student.entity';
export declare class DepartmentService {
    private departmentRepository;
    private defenceRepository;
    constructor(departmentRepository: Repository<Department>, defenceRepository: Repository<Defence>);
    create(department: Department): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, department: Department): Promise<void>;
    delete(id: number): Promise<void>;
    findDefencesByDepartmentId(departmentId: number): Promise<Defence[]>;
    findStudentsByDepartmentId(departmentId: number): Promise<Student[]>;
}
