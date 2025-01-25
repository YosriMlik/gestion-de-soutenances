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
exports.InviteeController = void 0;
const common_1 = require("@nestjs/common");
const invitee_service_1 = require("../services/invitee.service");
const invitee_entity_1 = require("../entities/invitee.entity");
const passport_1 = require("@nestjs/passport");
let InviteeController = class InviteeController {
    constructor(inviteeService) {
        this.inviteeService = inviteeService;
    }
    async create(invitee) {
        return this.inviteeService.create(invitee);
    }
    async findAll() {
        return this.inviteeService.findAll();
    }
    async findOne(id) {
        return this.inviteeService.findOne(id);
    }
    async update(id, invitee) {
        await this.inviteeService.update(id, invitee);
    }
    async delete(id) {
        await this.inviteeService.delete(id);
    }
    async deleteMany(body) {
        await this.inviteeService.deleteMany(body.ids);
        return { message: 'Selected invitees deleted successfully' };
    }
};
exports.InviteeController = InviteeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invitee_entity_1.Invitee]),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, invitee_entity_1.Invitee]),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InviteeController.prototype, "deleteMany", null);
exports.InviteeController = InviteeController = __decorate([
    (0, common_1.Controller)('invitees'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [invitee_service_1.InviteeService])
], InviteeController);
//# sourceMappingURL=invitee.controller.js.map