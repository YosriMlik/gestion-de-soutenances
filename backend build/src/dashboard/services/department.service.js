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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("../entities/department.entity");
const defence_entity_1 = require("../entities/defence.entity");
let DepartmentService = class DepartmentService {
    constructor(departmentRepository, defenceRepository) {
        this.departmentRepository = departmentRepository;
        this.defenceRepository = defenceRepository;
    }
    async create(department) {
        return this.departmentRepository.save(department);
    }
    async findAll() {
        return this.departmentRepository.find({ relations: ['students', 'defences'] });
    }
    async findOne(id) {
        return this.departmentRepository.findOne({
            where: { id },
            relations: ['students', 'defences'],
        });
    }
    async update(id, department) {
        await this.departmentRepository.update(id, department);
    }
    async delete(id) {
        await this.departmentRepository.delete(id);
    }
    async findDefencesByDepartmentId(departmentId) {
        let defences = await this.defenceRepository.find({
            where: { department: { id: departmentId } },
            relations: ['department', 'classroom', 'students', 'invitees', 'juries'],
        });
        if (!defences) {
            throw new common_1.NotFoundException('No defences found for this department');
        }
        else if (defences.length === 0) {
            defences = [];
        }
        return defences;
    }
    async findStudentsByDepartmentId(departmentId) {
        const department = await this.departmentRepository.findOne({
            where: { id: departmentId },
            relations: ['students'],
        });
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        return department.students;
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __param(1, (0, typeorm_1.InjectRepository)(defence_entity_1.Defence)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DepartmentService);
//# sourceMappingURL=department.service.js.map