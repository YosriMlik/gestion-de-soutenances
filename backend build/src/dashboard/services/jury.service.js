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
exports.JuryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jury_entity_1 = require("../entities/jury.entity");
let JuryService = class JuryService {
    constructor(juryRepository) {
        this.juryRepository = juryRepository;
    }
    async create(jury) {
        return this.juryRepository.save(jury);
    }
    async findAll() {
        return this.juryRepository.find({ relations: ['defences'] });
    }
    async findOne(id) {
        return this.juryRepository.findOne({
            where: { id },
            relations: ['defences'],
        });
    }
    async update(id, jury) {
        await this.juryRepository.update(id, jury);
    }
    async delete(id) {
        await this.juryRepository.delete(id);
    }
    async deleteMany(ids) {
        await this.juryRepository.delete(ids);
    }
};
exports.JuryService = JuryService;
exports.JuryService = JuryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jury_entity_1.Jury)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JuryService);
//# sourceMappingURL=jury.service.js.map