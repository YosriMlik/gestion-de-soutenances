"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [__dirname + '/src/dashboard/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    synchronize: true,
    logging: true,
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map