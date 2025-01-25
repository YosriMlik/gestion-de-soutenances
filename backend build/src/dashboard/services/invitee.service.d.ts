import { Repository } from 'typeorm';
import { Invitee } from '../entities/invitee.entity';
export declare class InviteeService {
    private inviteeRepository;
    constructor(inviteeRepository: Repository<Invitee>);
    create(invitee: Invitee): Promise<Invitee>;
    findAll(): Promise<Invitee[]>;
    findOne(id: number): Promise<Invitee>;
    update(id: number, inviteeData: Partial<Invitee>): Promise<Invitee>;
    delete(id: number): Promise<void>;
    deleteMany(ids: number[]): Promise<void>;
}
