"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = __importDefault(require("../controllers/courseController"));
class CourseRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', courseController_1.default.list);
        this.router.get('/class', courseController_1.default.getClass);
        this.router.get('/:id', courseController_1.default.getOne);
        this.router.post('/', courseController_1.default.create);
        this.router.delete('/:id', courseController_1.default.delete);
    }
}
const courseRoutes = new CourseRoutes();
exports.default = courseRoutes.router;
