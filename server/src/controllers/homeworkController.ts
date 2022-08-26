import { User } from "../models/user";
import {request, Request, Response, text } from 'express';
import pool from '../database';
import { Course } from "../models/course";

class HomeworkController {


    public async list (req: Request, res: Response){
        const Homeworks = await pool.query('SELECT HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,HOMEWORK_CREATION,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID,SESSIONS_SESSION_ID FROM lmz.homeworks INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID GROUP BY HOMEWORK_NAME ORDER BY HOMEWORK_ID ASC');
        res.json(Homeworks);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const Homework = await pool.query('SELECT HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,HOMEWORK_CREATION,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID FROM lmz.homeworks INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID WHERE HOMEWORK_ID= ? GROUP BY HOMEWORK_NAME;', [id]);
        if(Homework.length > 0){
            return res.json(Homework[0]);
        }
        console.log(Homework);
        res.status(404).json({text: 'Tarea no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        // Need 4 Values 
        // 1-Name Homework
        // 2-ID Student
        // 3-ID Course
        // 4-ID Session
        const newHomework: object=req.body; 
        await pool.query(`call newhomework('${Object.values(newHomework)[0]}','${Object.values(newHomework)[1]}','${Object.values(newHomework)[2]}',${Object.values(newHomework)[6]},${Object.values(newHomework)[3]},${Object.values(newHomework)[7]})`);
        console.log(`call newhomework('${Object.values(newHomework)[0]}','${Object.values(newHomework)[1]}','${Object.values(newHomework)[2]}',${Object.values(newHomework)[6]},${Object.values(newHomework)[3]},${Object.values(newHomework)[7]})`);

        res.json({message: 'Curso GeneradoX'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('call deleteHomeworks( ? );', [id]);
        res.json({text: 'Curso eliminado'});
    }
}

const homeworkController = new HomeworkController();
export default homeworkController;