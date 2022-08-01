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
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM Users Where email = ?`;
            const [data] = yield this.connection.execute(query, [email]);
            const [user] = data;
            return user || null;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM Users`;
            const [users] = yield this.connection.execute(query);
            return users;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM Users WHERE id = ?`;
            const [data] = yield this.connection.execute(query, [id]);
            const [user] = data;
            return user || null;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`;
            const [data] = yield this.connection.execute(query, [name, email, password]);
            const { insertId } = data;
            const id = insertId;
            const newUser = { id, name, email, password };
            return newUser;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = user;
            const query = `UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?`;
            yield this.connection.execute(query, [name, email, password, id]);
            const userEdited = { id, name, email, password };
            return userEdited;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `DELETE FROM Users WHERE id = ?`;
            yield this.connection.execute(query, [id]);
        });
    }
}
exports.default = UserModel;
