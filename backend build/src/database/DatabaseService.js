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
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const department_entity_1 = require("../dashboard/entities/department.entity");
let DatabaseService = class DatabaseService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    async onApplicationBootstrap() {
        const count = await this.departmentRepository.count();
        if (count === 0) {
            console.log('Inserting default departments...');
            const departments = [
                { id: 1, name: 'Licence Génie Industriel' },
                { id: 2, name: 'Licence Génie Informatique' },
                { id: 3, name: 'Mastére Industrie v4.0' },
                { id: 4, name: 'Génie Civil' },
                { id: 5, name: 'Génie Procédés' },
                { id: 6, name: 'Génie Télécommunication' },
                { id: 7, name: 'Génie Industriel' },
                { id: 8, name: 'Génie Informatique' },
                { id: 9, name: 'Génie Mécanique' },
            ];
            await this.departmentRepository.save(departments);
            console.log('Default departments inserted.');
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DatabaseService);
//# sourceMappingURL=DatabaseService.js.map