import { User } from "../models/user";
import {request, Request, Response, text } from 'express';
import pool from '../database';
import { Course } from "../models/course";

class CourseController {

    public async list (req: Request, res: Response){
        const courses = await pool.query('SELECT COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID,CLASSROOM_NAME,CLASSROOM_GRADE,CLASSROOM_LEVEL FROM classrooms INNER JOIN courses ON CLASSROOM_ID = CLASSROOMS_ID');
        res.json(courses);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const course = await pool.query('SELECT * FROM lmz.courses WHERE COURSE_ID= ?', [id]);
        if(course.length > 0){
            return res.json(course[0]);
        }
        console.log(course);
        res.status(404).json({text: 'Curso no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO lmz.courses set ?', [req.body]);
        res.json({message: 'Curso Generado'});
    }
    public async getClass (req: Request, res: Response){
        const courses = await pool.query('SELECT * FROM lmz.classrooms');
        res.json(courses);
        //res.json({text: 'LISTADO'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM lmz.courses WHERE COURSE_ID = ?', [id]);
        res.json({text: 'Curso eliminado'});
    }
}

const courseController = new CourseController();
export default courseController;