import { Student } from "../../../server/src/models/student";
import {request, Request, Response, text } from 'express';
import pool from '../database';

class StudentController {

    public async list (req: Request, res: Response){
        
        const estudiantes = await pool.query('SELECT * FROM lmz.STUDENTS');
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

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE STUDENTS set ? WHERE STUDENT_ID = ?', [req.body, id]);
        res.json({text: 'Estudiante actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM STUDENTS WHERE STUDENT_ID = ?', [id]);
        res.json({text: 'Estudiante eliminado'});
    }
}

const studentController = new StudentController();
export default studentController;