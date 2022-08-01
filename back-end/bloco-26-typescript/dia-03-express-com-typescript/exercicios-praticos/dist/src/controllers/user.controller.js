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
const users_service_1 = __importDefault(require("../services/users.service"));
class UserController {
    constructor(userService = new users_service_1.default()) {
        this.userService = userService;
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userCredentials = req.body;
            const { code, message } = yield this.userService.login(userCredentials);
            return res.status(code).json(message);
        });
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            return res.status(200).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.getById(Number(id));
            if (user.message) {
                return res.status(user.code).json(user.message);
            }
            return res.status(user.code).json(user.user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const newUser = yield this.userService.create(body);
            if (newUser.message) {
                res.status(newUser.code).json(newUser.message);
            }
            return res.status(newUser.code).json(newUser.newUser);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const { id } = req.params;
            const editedUser = yield this.userService.update(id, body);
            if (editedUser.message) {
                res.status(editedUser.code).json(editedUser.message);
            }
            return res.status(editedUser.code).json(editedUser.userEdited);
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const removeUser = yield this.userService.delete(id);
            if (removeUser.message) {
                res.status(removeUser.code).json(removeUser.message);
            }
            return res.status(removeUser.code).json(removeUser.userDeleted);
        });
    }
}
exports.default = UserController;
