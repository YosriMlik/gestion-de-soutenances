import { Student } from './student.entity';
import { Defence } from './defence.entity';
export declare class Department {
    id: number;
    name: string;
    students: Student[];
    defences: Defence[];
}
