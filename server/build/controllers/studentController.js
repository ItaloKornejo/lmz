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
class StudentController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudiantes = yield database_1.default.query('SELECT * FROM lmz.STUDENTS');
            res.json(estudiantes);
            //res.json({text: 'LISTADO'});
        });
    }
    listStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudiantes = yield database_1.default.query(' SELECT STUDENT_ID as "studentId", STUDENT_NAME as "studentName",STUDENT_LASTNAME as "studentLastname",STUDENT_PHONE as "studentPhone",STUDENT_CREATION as "studentCreation",STUDENT_STATUS as "studentStatus",CLASSROOMS_CLASSROOM_ID as "classroomId",CLASSROOM_NAME as "classroomName",CLASSROOM_GRADE as "classroomGrade"FROM STUDENTS INNER JOIN CLASSROOMS ON STUDENTS.CLASSROOMS_CLASSROOM_ID = CLASSROOMS.CLASSROOM_ID; ');
            res.json(estudiantes);
            //res.json({text: 'LISTADO'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const estudiante = yield database_1.default.query('SELECT * FROM STUDENTS WHERE STUDENT_ID = ?', [id]);
            if (estudiante.length > 0) {
                return res.json(estudiante[0]);
            }
            console.log(estudiante);
            res.status(404).json({ text: 'Estuadiante no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO STUDENTS set ?', [req.body]);
            res.json({ message: 'Estudiante Generado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE STUDENTS set ? WHERE STUDENT_ID = ?', [req.body, id]);
            res.json({ text: 'Estudiante actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM STUDENTS WHERE STUDENT_ID = ?', [id]);
            res.json({ text: 'Estudiante eliminado' });
        });
    }
}
const studentController = new StudentController();
exports.default = studentController;
