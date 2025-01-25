"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const invitee_entity_1 = require("../entities/invitee.entity");
let InviteeService = class InviteeService {
    constructor(inviteeRepository) {
        this.inviteeRepository = inviteeRepository;
    }
    async create(invitee) {
        return this.inviteeRepository.save(invitee);
    }
    async findAll() {
        return this.inviteeRepository.find({ relations: ['defences'] });
    }
    async findOne(id) {
        return this.inviteeRepository.findOne({
            where: { id },
            relations: ['defences'],
        });
    }
    async update(id, inviteeData) {
        const invitee = await this.inviteeRepository.findOne({ where: { id } });
        if (!invitee) {
            throw new Error('Invitee not found');
        }
        const { defences, ...updateData } = inviteeData;
        Object.assign(invitee, updateData);
        return this.inviteeRepository.save(invitee);
    }
    async delete(id) {
        await this.inviteeRepository.delete(id);
    }
    async deleteMany(ids) {
        await this.inviteeRepository.delete(ids);
    }
};
exports.InviteeService = InviteeService;
exports.InviteeService = InviteeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invitee_entity_1.Invitee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InviteeService);
//# sourceMappingURL=invitee.service.js.map