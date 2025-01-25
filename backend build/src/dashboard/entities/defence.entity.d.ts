import { Department } from './department.entity';
import { Classroom } from './classroom.entity';
import { Student } from './student.entity';
import { Invitee } from './invitee.entity';
import { Jury } from './jury.entity';
export declare class Defence {
    id: number;
    date: Date;
    hour: string;
    projectName: string;
    department: Department;
    classroom: Classroom;
    students: Student[];
    invitees: Invitee[];
    juries: Jury[];
}
