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
exports.ClassroomController = void 0;
const common_1 = require("@nestjs/common");
const classroom_service_1 = require("../services/classroom.service");
const classroom_entity_1 = require("../entities/classroom.entity");
const passport_1 = require("@nestjs/passport");
let ClassroomController = class ClassroomController {
    constructor(classroomService) {
        this.classroomService = classroomService;
    }
    async create(classroom) {
        return this.classroomService.create(classroom);
    }
    async findAll() {
        return this.classroomService.findAll();
    }
    async findOne(id) {
        return this.classroomService.findOne(id);
    }
    async update(id, classroom) {
        await this.classroomService.update(id, classroom);
    }
    async delete(id) {
        await this.classroomService.delete(id);
    }
    async deleteMany(body) {
        await this.classroomService.deleteMany(body.ids);
        return { message: 'Selected classrooms deleted successfully' };
    }
};
exports.ClassroomController = ClassroomController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [classroom_entity_1.Classroom]),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, classroom_entity_1.Classroom]),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClassroomController.prototype, "deleteMany", null);
exports.ClassroomController = ClassroomController = __decorate([
    (0, common_1.Controller)('classrooms'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [classroom_service_1.ClassroomService])
], ClassroomController);
//# sourceMappingURL=classroom.controller.js.map