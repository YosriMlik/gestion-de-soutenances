import { OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department } from '../dashboard/entities/department.entity';
export declare class DatabaseService implements OnApplicationBootstrap {
    private readonly departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    onApplicationBootstrap(): Promise<void>;
}
