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
class HomeworkController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Homeworks = yield database_1.default.query('SELECT HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,HOMEWORK_CREATION,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID,SESSIONS_SESSION_ID FROM lmz.homeworks INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID GROUP BY HOMEWORK_NAME ORDER BY HOMEWORK_ID ASC');
            res.json(Homeworks);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Homework = yield database_1.default.query('SELECT HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,HOMEWORK_CREATION,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID FROM lmz.homeworks INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID WHERE HOMEWORK_ID= ? GROUP BY HOMEWORK_NAME;', [id]);
            if (Homework.length > 0) {
                return res.json(Homework[0]);
            }
            console.log(Homework);
            res.status(404).json({ text: 'Tarea no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            // Need 4 Values 
            // 1-Name Homework
            // 2-ID Student
            // 3-ID Course
            // 4-ID Session
            const newHomework = req.body;
            yield database_1.default.query(`call newhomework('${Object.values(newHomework)[0]}','${Object.values(newHomework)[1]}','${Object.values(newHomework)[2]}',${Object.values(newHomework)[6]},${Object.values(newHomework)[3]},${Object.values(newHomework)[7]})`);
            console.log(`call newhomework('${Object.values(newHomework)[0]}','${Object.values(newHomework)[1]}','${Object.values(newHomework)[2]}',${Object.values(newHomework)[6]},${Object.values(newHomework)[3]},${Object.values(newHomework)[7]})`);
            res.json({ message: 'Curso GeneradoX' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('call deleteHomeworks( ? );', [id]);
            res.json({ text: 'Curso eliminado' });
        });
    }
}
const homeworkController = new HomeworkController();
exports.default = homeworkController;
