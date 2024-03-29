"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', loginController_1.default.list);
        this.router.post('/isAuth', loginController_1.default.getAuth);
        this.router.get('/:id', loginController_1.default.getOne);
        this.router.post('/', loginController_1.default.create);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
