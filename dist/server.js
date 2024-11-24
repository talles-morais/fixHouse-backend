"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
var app = (0, express_1.default)();
var prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use('/users', clientRoutes_1.default);
app.listen(8080, function () {
    console.log('Server is running on port 8080');
});
