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
exports.DefenceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const defence_entity_1 = require("../entities/defence.entity");
let DefenceService = class DefenceService {
    constructor(defenceRepository) {
        this.defenceRepository = defenceRepository;
    }
    async create(defence) {
        console.log('Defence data:', defence);
        return this.defenceRepository.save(defence);
    }
    async findAll() {
        return this.defenceRepository.find({
            relations: ['department', 'classroom', 'students', 'invitees', 'juries'],
        });
    }
    async findOne(id) {
        return this.defenceRepository.findOne({
            where: { id },
            relations: ['department', 'classroom', 'students', 'invitees', 'juries'],
        });
    }
    async update(id, defence) {
        await this.defenceRepository.update(id, defence);
    }
    async delete(id) {
        await this.defenceRepository.delete(id);
    }
    async deleteMany(ids) {
        await this.defenceRepository
            .createQueryBuilder()
            .delete()
            .from('defence_juries_jury')
            .where('defenceId IN (:...ids)', { ids })
            .execute();
        await this.defenceRepository
            .createQueryBuilder()
            .delete()
            .from('defence_invitees_invitee')
            .where('defenceId IN (:...ids)', { ids })
            .execute();
        await this.defenceRepository.delete(ids);
    }
};
exports.DefenceService = DefenceService;
exports.DefenceService = DefenceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(defence_entity_1.Defence)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DefenceService);
//# sourceMappingURL=defence.service.js.map