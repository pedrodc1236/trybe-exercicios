"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userMiddleware_1 = __importDefault(require("../middlewares/userMiddleware"));
const router = (0, express_1.Router)();
const userController = new user_controller_1.default;
router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.delete('/:id', userController.remove);
router.use(userMiddleware_1.default);
router.post('/', userController.create);
router.put('/:id', userController.update);
exports.default = router;
