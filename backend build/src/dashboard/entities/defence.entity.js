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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defence = void 0;
const typeorm_1 = require("typeorm");
const department_entity_1 = require("./department.entity");
const classroom_entity_1 = require("./classroom.entity");
const student_entity_1 = require("./student.entity");
const invitee_entity_1 = require("./invitee.entity");
const jury_entity_1 = require("./jury.entity");
let Defence = class Defence {
};
exports.Defence = Defence;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Defence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Defence.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Defence.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Defence.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.defences),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Defence.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => classroom_entity_1.Classroom, (classroom) => classroom.defences),
    (0, typeorm_1.JoinColumn)({ name: 'classroom_id' }),
    __metadata("design:type", classroom_entity_1.Classroom)
], Defence.prototype, "classroom", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.defence),
    __metadata("design:type", Array)
], Defence.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => invitee_entity_1.Invitee, (invitee) => invitee.defences),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Defence.prototype, "invitees", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => jury_entity_1.Jury, (jury) => jury.defences),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Defence.prototype, "juries", void 0);
exports.Defence = Defence = __decorate([
    (0, typeorm_1.Entity)()
], Defence);
//# sourceMappingURL=defence.entity.js.map