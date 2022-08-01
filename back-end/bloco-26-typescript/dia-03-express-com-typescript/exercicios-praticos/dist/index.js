"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./src/routes/users.routes"));
const app = (0, express_1.default)();
const { PORT } = process.env;
app.use(express_1.default.json());
app.use('/users', users_routes_1.default);
app.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`);
});
