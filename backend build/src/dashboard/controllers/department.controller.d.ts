import { DepartmentService } from '../services/department.service';
import { Department } from '../entities/department.entity';
import { Defence } from '../entities/defence.entity';
import { Student } from '../entities/student.entity';
import { StudentService } from '../services/student.service';
export declare class DepartmentController {
    private readonly departmentService;
    private readonly studentService;
    constructor(departmentService: DepartmentService, studentService: StudentService);
    create(department: Department): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, department: Department): Promise<void>;
    delete(id: number): Promise<void>;
    findDefencesByDepartmentId(id: number): Promise<Defence[]>;
    findStudentsWithoutDefence(departmentId: number): Promise<Student[]>;
}
