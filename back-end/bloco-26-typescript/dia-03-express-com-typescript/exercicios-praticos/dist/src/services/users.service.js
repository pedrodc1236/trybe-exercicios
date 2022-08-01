"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    constructor() {
        this.model = new user_model_1.default(connection_1.default);
    }
    login(userCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.getByEmail(userCredentials.email);
            if (data === null) {
                return { code: 403, message: 'Esse email não esta cadastrado!' };
            }
            if (data.password !== userCredentials.password) {
                return { code: 403, message: 'A senha digitada esta incorreta!' };
            }
            return { code: 200, message: { token: 'fake token' } };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.model.getAll();
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.getById(id);
            if (!user)
                return { code: 404, message: 'O usuário é inexistente!' };
            return { code: 200, user: user };
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = body;
            const emailExists = yield this.model.getByEmail(email);
            if (emailExists) {
                const message = 'Ao criar um novo user, o email não pode já estar cadastrado.';
                return { code: 400, message };
            }
            const newUser = yield this.model.create(body);
            return { code: 201, newUser };
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const idExists = yield this.model.getById(Number(id));
            if (!idExists) {
                const message = 'Esse usuário não existe!';
                return { code: 404, message };
            }
            const userEdited = yield this.model.update(Number(id), body);
            return { code: 200, userEdited };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield this.model.getById(Number(id));
            if (!userDeleted) {
                const message = 'Esse usuário não existe!';
                return { code: 404, message };
            }
            yield this.model.delete(Number(id));
            return { code: 200, userDeleted };
        });
    }
}
exports.default = UserService;
