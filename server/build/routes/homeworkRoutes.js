"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeworkController_1 = __importDefault(require("../controllers/homeworkController"));
class HomeworkRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', homeworkController_1.default.list);
        this.router.get('/:id', homeworkController_1.default.getOne);
        this.router.post('/', homeworkController_1.default.create);
        this.router.delete('/:id', homeworkController_1.default.delete);
    }
}
const homeworkRoutes = new HomeworkRoutes();
exports.default = homeworkRoutes.router;
