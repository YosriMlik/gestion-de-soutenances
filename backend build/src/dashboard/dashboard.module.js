"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classroom_entity_1 = require("./entities/classroom.entity");
const student_entity_1 = require("./entities/student.entity");
const department_entity_1 = require("./entities/department.entity");
const invitee_entity_1 = require("./entities/invitee.entity");
const jury_entity_1 = require("./entities/jury.entity");
const defence_entity_1 = require("./entities/defence.entity");
const classroom_service_1 = require("./services/classroom.service");
const student_service_1 = require("./services/student.service");
const department_service_1 = require("./services/department.service");
const invitee_service_1 = require("./services/invitee.service");
const jury_service_1 = require("./services/jury.service");
const defence_service_1 = require("./services/defence.service");
const classroom_controller_1 = require("./controllers/classroom.controller");
const student_controller_1 = require("./controllers/student.controller");
const department_controller_1 = require("./controllers/department.controller");
const invitee_controller_1 = require("./controllers/invitee.controller");
const jury_controller_1 = require("./controllers/jury.controller");
const defence_controller_1 = require("./controllers/defence.controller");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                classroom_entity_1.Classroom,
                student_entity_1.Student,
                department_entity_1.Department,
                invitee_entity_1.Invitee,
                jury_entity_1.Jury,
                defence_entity_1.Defence,
            ]),
        ],
        controllers: [
            classroom_controller_1.ClassroomController,
            student_controller_1.StudentController,
            department_controller_1.DepartmentController,
            invitee_controller_1.InviteeController,
            jury_controller_1.JuryController,
            defence_controller_1.DefenceController,
        ],
        providers: [
            classroom_service_1.ClassroomService,
            student_service_1.StudentService,
            department_service_1.DepartmentService,
            invitee_service_1.InviteeService,
            jury_service_1.JuryService,
            defence_service_1.DefenceService,
        ],
    })
], DashboardModule);
//# sourceMappingURL=dashboard.module.js.map