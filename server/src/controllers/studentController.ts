import { Student } from "../../../server/src/models/student";
import {request, Request, Response, text } from 'express';
import pool from '../database';

const PDF = require('pdfkit-construct');

class StudentController {

    public async list (req: Request, res: Response){
        
        const estudiantes = await pool.query('SELECT * FROM lmz.STUDENTS');
        res.json(estudiantes);
        //res.json({text: 'LISTADO'});
    }
    
    public async listStudents (req: Request, res: Response){
        const estudiantes = await pool.query('SELECT STUDENT_ID,STUDENT_NAME,STUDENT_LASTNAME,STUDENT_PHONE,CLASSROOMS_CLASSROOM_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM students INNER JOIN classrooms ON CLASSROOMS_CLASSROOM_ID = CLASSROOM_ID WHERE CLASSROOMS_CLASSROOM_ID=7 and STUDENT_STATUS=1 ORDER BY STUDENT_NAME ASC');

        res.json(estudiantes);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const estudiante = await pool.query('SELECT * FROM STUDENTS WHERE STUDENT_ID = ?', [id]);
        if(estudiante.length > 0){
            return res.json(estudiante[0]);
        }
        console.log(estudiante);
        res.status(404).json({text: 'Estuadiante no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO STUDENTS set ?', [req.body]);
        res.json({message: 'Estudiante Generado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params; 
        //await pool.query('UPDATE STUDENTS set ? WHERE STUDENT_ID = ?', [req.body, id]);
        await pool.query(`UPDATE lmz.students SET STUDENT_STATUS = '0' WHERE (STUDENT_ID = ${id})`);
        console.log(id);
        res.json({text: 'Estudiante Eliminado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params; 
        await pool.query('UPDATE STUDENTS set ? WHERE STUDENT_ID = ?', [req.body, id]);
        console.log(id);
        res.json({text: 'Estudiante actualizado'});
    }

    // public async delete (req: Request, res: Response): Promise<void>{
    //     const {id} = req.params;
    //     await pool.query('DELETE FROM STUDENTS WHERE STUDENT_ID = ?', [id]);
    //     res.json({text: 'Estudiante eliminado'});
    // }

    public async getPdf (req: Request, res: Response): Promise<void>{

        const estudiantes = await pool.query('SELECT STUDENT_ID,STUDENT_NAME,STUDENT_LASTNAME,STUDENT_PHONE,CLASSROOMS_CLASSROOM_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM students INNER JOIN classrooms ON CLASSROOMS_CLASSROOM_ID = CLASSROOM_ID WHERE CLASSROOMS_CLASSROOM_ID=7 and STUDENT_STATUS=1 ORDER BY STUDENT_NAME ASC');

        const students = estudiantes.map( (estudiante : any) => {
            const student = { 
                nameStudent : estudiante.STUDENT_NAME, 
                lastnameStudent : estudiante.STUDENT_LASTNAME,
                phoneStudent : estudiante.STUDENT_PHONE,
                nameClassroom : estudiante.CLASSROOM_NAME,
                levelClassroom : estudiante.CLASSROOM_LEVEL
            }
            return student;
        })

        const doc = new PDF({bufferPage:true});

        const filename = `Lista_Alumnnos_${Date.now()}.pdf`;
        // const filename = `ListaAlumnos.pdf`;
        const stream = res.writeHead(200,{
            'Content-Type' : 'application/pdf',
            'Content-disposition': `attachment;filename=${filename}`

        });
        doc.on('data',(data: any) => {stream.write(data)});
        doc.on('end',() => {stream.end()});

        doc.setDocumentHeader({},() =>{
            doc.fontSize(14).text('Lista de Alumnos',{
                with: 420,
                align: 'center'
            });
        });

        doc.addTable(
            [
                {key: 'nameStudent', label: 'Nombres', align: 'left'},
                {key: 'lastnameStudent', label: 'Apellidos', align: 'left'},
                {key: 'phoneStudent', label: 'Telefono', align: 'right'},
                {key: 'nameClassroom', label: 'Aula'},
                {key: 'levelClassroom', label: 'Nivel', align: 'right'}
            ],students, {
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
    }
}

const studentController = new StudentController();
export default studentController;