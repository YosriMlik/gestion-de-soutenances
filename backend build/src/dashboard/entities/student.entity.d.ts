import { Department } from './department.entity';
import { Defence } from './defence.entity';
export declare class Student {
    id: number;
    firstname: string;
    lastname: string;
    address: string;
    department: Department;
    defence: Defence | null;
}
