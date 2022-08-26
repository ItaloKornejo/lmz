"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sessionController_1 = __importDefault(require("../controllers/sessionController"));
class SessionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', sessionController_1.default.list);
        this.router.get('/:id', sessionController_1.default.getOne);
        this.router.post('/', sessionController_1.default.create);
        this.router.delete('/:id', sessionController_1.default.delete);
    }
}
const sessionRoutes = new SessionRoutes();
exports.default = sessionRoutes.router;
