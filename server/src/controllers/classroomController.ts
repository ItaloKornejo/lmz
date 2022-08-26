import { User } from "../models/user";
import {request, Request, Response, text } from 'express';
import pool from '../database';
import { Course } from "../models/course";

class ClassroomController {

    public async list (req: Request, res: Response){
        const classrooms = await pool.query('SELECT * FROM lmz.classrooms');
        res.json(classrooms);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const classroom = await pool.query('SELECT * FROM lmz.classrooms WHERE CLASSROOM_ID= ?', [id]);
        if(classroom.length > 0){
            return res.json(classroom[0]);
        }
        console.log(classroom);
        res.status(404).json({text: 'Curso no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        // await pool.query('INSERT INTO lmz.courses set ?', [req.body]);
        res.json({message: 'Curso Generado'});
    }

    // public async delete (req: Request, res: Response): Promise<void>{
    //     const {id} = req.params;
    //     await pool.query('DELETE FROM lmz.courses WHERE COURSE_ID = ?', [id]);
    //     res.json({text: 'Curso eliminado'});
    // }
}

const classroomController = new ClassroomController();
export default classroomController;