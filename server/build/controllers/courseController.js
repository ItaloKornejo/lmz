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
const database_1 = __importDefault(require("../database"));
class CourseController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = yield database_1.default.query('SELECT COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM classrooms INNER JOIN courses ON CLASSROOM_ID = CLASSROOMS_ID');
            res.json(courses);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const course = yield database_1.default.query('SELECT * FROM lmz.courses WHERE COURSE_ID= ?', [id]);
            if (course.length > 0) {
                return res.json(course[0]);
            }
            console.log(course);
            res.status(404).json({ text: 'Curso no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO lmz.courses set ?', [req.body]);
            res.json({ message: 'Curso Generado' });
        });
    }
    getClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = yield database_1.default.query('SELECT * FROM lmz.classrooms');
            res.json(courses);
            //res.json({text: 'LISTADO'});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM lmz.courses WHERE COURSE_ID = ?', [id]);
            res.json({ text: 'Curso eliminado' });
        });
    }
}
const courseController = new CourseController();
exports.default = courseController;
