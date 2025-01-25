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
exports.JuryController = void 0;
const common_1 = require("@nestjs/common");
const jury_service_1 = require("../services/jury.service");
const jury_entity_1 = require("../entities/jury.entity");
const passport_1 = require("@nestjs/passport");
let JuryController = class JuryController {
    constructor(juryService) {
        this.juryService = juryService;
    }
    async create(jury) {
        return this.juryService.create(jury);
    }
    async findAll() {
        return this.juryService.findAll();
    }
    async findOne(id) {
        return this.juryService.findOne(id);
    }
    async update(id, jury) {
        await this.juryService.update(id, jury);
    }
    async delete(id) {
        await this.juryService.delete(id);
    }
    async deleteMany(body) {
        await this.juryService.deleteMany(body.ids);
        return { message: 'Selected juries deleted successfully' };
    }
};
exports.JuryController = JuryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jury_entity_1.Jury]),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, jury_entity_1.Jury]),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JuryController.prototype, "deleteMany", null);
exports.JuryController = JuryController = __decorate([
    (0, common_1.Controller)('juries'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [jury_service_1.JuryService])
], JuryController);
//# sourceMappingURL=jury.controller.js.map