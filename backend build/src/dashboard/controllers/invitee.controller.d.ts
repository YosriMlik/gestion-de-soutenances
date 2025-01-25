import { InviteeService } from '../services/invitee.service';
import { Invitee } from '../entities/invitee.entity';
export declare class InviteeController {
    private readonly inviteeService;
    constructor(inviteeService: InviteeService);
    create(invitee: Invitee): Promise<Invitee>;
    findAll(): Promise<Invitee[]>;
    findOne(id: number): Promise<Invitee>;
    update(id: number, invitee: Invitee): Promise<void>;
    delete(id: number): Promise<void>;
    deleteMany(body: {
        ids: number[];
    }): Promise<{
        message: string;
    }>;
}
