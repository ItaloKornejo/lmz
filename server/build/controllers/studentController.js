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
const PDF = require('pdfkit-construct');
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
            const estudiantes = yield database_1.default.query('SELECT STUDENT_ID,STUDENT_NAME,STUDENT_LASTNAME,STUDENT_PHONE,CLASSROOMS_CLASSROOM_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM students INNER JOIN classrooms ON CLASSROOMS_CLASSROOM_ID = CLASSROOM_ID WHERE CLASSROOMS_CLASSROOM_ID=7 ORDER BY STUDENT_NAME ASC');
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
    getPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudiantes = yield database_1.default.query('SELECT STUDENT_ID,STUDENT_NAME,STUDENT_LASTNAME,STUDENT_PHONE,CLASSROOMS_CLASSROOM_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM students INNER JOIN classrooms ON CLASSROOMS_CLASSROOM_ID = CLASSROOM_ID ORDER BY STUDENT_NAME ASC');
            const students = estudiantes.map((estudiante) => {
                const student = {
                    nameStudent: estudiante.STUDENT_NAME,
                    lastnameStudent: estudiante.STUDENT_LASTNAME,
                    phoneStudent: estudiante.STUDENT_PHONE,
                    nameClassroom: estudiante.CLASSROOM_NAME,
                    levelClassroom: estudiante.CLASSROOM_LEVEL
                };
                return student;
            });
            const doc = new PDF({ bufferPage: true });
            const filename = `Lista_Alumnnos_${Date.now()}.pdf`;
            // const filename = `ListaAlumnos.pdf`;
            const stream = res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Content-disposition': `attachment;filename=${filename}`
            });
            doc.on('data', (data) => { stream.write(data); });
            doc.on('end', () => { stream.end(); });
            doc.setDocumentHeader({}, () => {
                doc.fontSize(14).text('Lista de Alumnos', {
                    with: 420,
                    align: 'center'
                });
            });
            doc.addTable([
                { key: 'nameStudent', label: 'Nombres', align: 'left' },
                { key: 'lastnameStudent', label: 'Apellidos', align: 'left' },
                { key: 'phoneStudent', label: 'Telefono', align: 'right' },
                { key: 'nameClassroom', label: 'Aula' },
                { key: 'levelClassroom', label: 'Nivel', align: 'right' }
            ], students, {
                border: null,
                width: "fill_body",
                striped: true,
                stripedColors: ["#f6f6f6", "#D9D9D9"],
                cellsPadding: 10,
                marginLeft: 45,
                marginRight: 45,
                headAlign: 'center'
            });
            doc.render();
            doc.end();
        });
    }
}
const studentController = new StudentController();
exports.default = studentController;
