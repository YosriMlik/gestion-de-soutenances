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
exports.DefenceController = void 0;
const common_1 = require("@nestjs/common");
const defence_service_1 = require("../services/defence.service");
const defence_entity_1 = require("../entities/defence.entity");
const passport_1 = require("@nestjs/passport");
const student_service_1 = require("../services/student.service");
let DefenceController = class DefenceController {
    constructor(defenceService, studentService) {
        this.defenceService = defenceService;
        this.studentService = studentService;
    }
    async create(defence) {
        return this.defenceService.create(defence);
    }
    async findAll() {
        return this.defenceService.findAll();
    }
    async findOne(id) {
        return this.defenceService.findOne(id);
    }
    async update(id, defence) {
        await this.defenceService.update(id, defence);
    }
    async delete(ids) {
        const defenceIds = ids.map((item) => item.id);
        await this.defenceService.deleteMany(defenceIds);
    }
};
exports.DefenceController = DefenceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [defence_entity_1.Defence]),
    __metadata("design:returntype", Promise)
], DefenceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DefenceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DefenceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, defence_entity_1.Defence]),
    __metadata("design:returntype", Promise)
], DefenceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DefenceController.prototype, "delete", null);
exports.DefenceController = DefenceController = __decorate([
    (0, common_1.Controller)('defences'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [defence_service_1.DefenceService,
        student_service_1.StudentService])
], DefenceController);
//# sourceMappingURL=defence.controller.js.map