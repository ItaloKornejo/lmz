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
class ClassroomController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classrooms = yield database_1.default.query('SELECT * FROM lmz.classrooms');
            res.json(classrooms);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const classroom = yield database_1.default.query('SELECT * FROM lmz.classrooms WHERE CLASSROOM_ID= ?', [id]);
            if (classroom.length > 0) {
                return res.json(classroom[0]);
            }
            console.log(classroom);
            res.status(404).json({ text: 'Curso no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            // await pool.query('INSERT INTO lmz.courses set ?', [req.body]);
            res.json({ message: 'Curso Generado' });
        });
    }
}
const classroomController = new ClassroomController();
exports.default = classroomController;
