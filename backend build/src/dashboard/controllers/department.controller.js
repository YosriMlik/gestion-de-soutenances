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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("../services/department.service");
const department_entity_1 = require("../entities/department.entity");
const passport_1 = require("@nestjs/passport");
const student_service_1 = require("../services/student.service");
let DepartmentController = class DepartmentController {
    constructor(departmentService, studentService) {
        this.departmentService = departmentService;
        this.studentService = studentService;
    }
    async create(department) {
        return this.departmentService.create(department);
    }
    async findAll() {
        return this.departmentService.findAll();
    }
    async findOne(id) {
        return this.departmentService.findOne(id);
    }
    async update(id, department) {
        await this.departmentService.update(id, department);
    }
    async delete(id) {
        await this.departmentService.delete(id);
    }
    async findDefencesByDepartmentId(id) {
        try {
            return await this.departmentService.findDefencesByDepartmentId(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findStudentsWithoutDefence(departmentId) {
        return this.studentService.findStudentsWithoutDefence(departmentId);
    }
};
exports.DepartmentController = DepartmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_entity_1.Department]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, department_entity_1.Department]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/defences'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findDefencesByDepartmentId", null);
__decorate([
    (0, common_1.Get)(':departmentId/students-without-defence'),
    __param(0, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findStudentsWithoutDefence", null);
exports.DepartmentController = DepartmentController = __decorate([
    (0, common_1.Controller)('departments'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [department_service_1.DepartmentService,
        student_service_1.StudentService])
], DepartmentController);
//# sourceMappingURL=department.controller.js.map