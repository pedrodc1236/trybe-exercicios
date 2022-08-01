"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateData = (name, email, password) => {
    if (password.length < 6 || password.length > 12) {
        const message = 'A senha deve possuir no mínimo 6 e no máximo 12 caracteres';
        return { code: 400, message };
    }
    if (name.length < 3) {
        const message = 'O nome deve possuir pelo menos 3 caracteres';
        return { code: 400, message };
    }
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        const message = 'O email deve possuir um formato de email válido (email@email.com)';
        return { code: 400, message };
    }
    return {};
};
function validateBody(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        const message = 'É necessário os campos "name", "email", "password" devidamente preenchidos !';
        return res.status(400).json({ message });
    }
    const validate = validateData(name, email, password);
    if (validate.message) {
        return res.status(validate.code).json(validate.message);
    }
    next();
}
exports.default = validateBody;
