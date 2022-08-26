import {request, Request, Response, text } from 'express';
import pool from '../database';



class SessionController {
    public async list (req: Request, res: Response){
        const Sessions = await pool.query('SELECT SESSION_ID,SESSION_NUMBER,SESSION_INI,SESSION_END,HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE FROM sessions INNER JOIN homeworks ON SESSION_ID = SESSIONS_SESSION_ID INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID  GROUP BY HOMEWORK_NAME ORDER BY SESSION_NUMBER ASC');
        res.json(Sessions);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{ 
        const {id}  = req.params;
        const Session = await pool.query('SELECT HOMEWORK_ID,HOMEWORK_NAME,HOMEWORK_DESCRIP,HOMEWORK_MAXDATE,HOMEWORK_CREATION,COURSES_COURSE_ID,COURSE_NAME,COURSE_CODE,CLASSROOMS_ID FROM lmz.homeworks INNER JOIN courses ON COURSES_COURSE_ID = COURSE_ID WHERE HOMEWORK_ID= ? GROUP BY HOMEWORK_NAME;', [id]);
        if(Session.length > 0){
            return res.json(Session[0]);
        }
        console.log(Session);
        res.status(404).json({text: 'Tarea no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        // Need 4 Values 
        // 1-Name Homework
        // 2-ID Student
        // 3-ID Course
        // 4-ID Session
        const newSession: object=req.body; 
        // await pool.query(`call newhomework('${Object.values(newHomework)[0]}','${Object.values(newHomework)[1]}','${Object.values(newHomework)[2]}',${Object.values(newHomework)[6]},${Object.values(newHomework)[3]},${Object.values(newHomework)[7]})`);
        console.log(newSession);

        res.json({message: 'Curso GeneradoX'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('call deleteHomeworks( ? );', [id]);
        res.json({text: 'Curso eliminado'});
    }
}

const sessionController = new SessionController();
export default sessionController;

