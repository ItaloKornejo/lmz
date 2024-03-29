"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classroomController_1 = __importDefault(require("../controllers/classroomController"));
class ClassroomRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', classroomController_1.default.list);
        this.router.get('/:id', classroomController_1.default.getOne);
        this.router.post('/', classroomController_1.default.create);
    }
}
const classroomRoutes = new ClassroomRoutes();
exports.default = classroomRoutes.router;
