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
exports.ClassroomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const classroom_entity_1 = require("../entities/classroom.entity");
let ClassroomService = class ClassroomService {
    constructor(classroomRepository) {
        this.classroomRepository = classroomRepository;
    }
    async create(classroom) {
        return this.classroomRepository.save(classroom);
    }
    async findAll() {
        return this.classroomRepository.find();
    }
    async findOne(id) {
        return this.classroomRepository.findOne({ where: { id } });
    }
    async update(id, classroom) {
        await this.classroomRepository.update(id, classroom);
    }
    async delete(id) {
        await this.classroomRepository.delete(id);
    }
    async deleteMany(ids) {
        await this.classroomRepository.delete(ids);
    }
};
exports.ClassroomService = ClassroomService;
exports.ClassroomService = ClassroomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(classroom_entity_1.Classroom)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClassroomService);
//# sourceMappingURL=classroom.service.js.map