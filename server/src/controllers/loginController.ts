import {request, Request, Response, text } from 'express';
import pool from '../database';

class LoginController {

    public async list (req: Request, res: Response){
        const courses = await pool.query('SELECT * FROM lmz.users');
        res.json(courses);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        // const {id}  = req.params;
        const userOBJ: object=req.body; 
        const user = await pool.query(`call USER_EXIST('${Object.values(userOBJ)[1]}','${Object.values(userOBJ)[2]}');`);
        if(user.length > 0){
            console.log('LO LOGRASTE'+Object.values(userOBJ)[1])
            return res.json(user[0]); 
            
        }
        console.log(user);
        res.status(404).json({text: 'LO LOGRASTE'});
    }

    public async getAuth (req: Request, res: Response){
        const userOBJ: object=req.body; 
        console.log(userOBJ);
        const user = await pool.query(`call USER_EXIST('${Object.values(userOBJ)[1]}','${Object.values(userOBJ)[2]}')`);
        if(user.length > 0){
            console.log(userOBJ);
            return res.json(user[0]); 
        }
        console.log(user);
        res.status(404).json({text: 'Auth is Fail'});
    }


    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        const newUser: object=req.body; 
        await pool.query(`INSERT INTO users (USER_NAME,USER_PASSWORD) VALUES ('${Object.values(newUser)[1]}', '${Object.values(newUser)[2]}')`);
        console.log(newUser);

        res.json({message: 'Usuario Generado'});
    }

    // public async delete (req: Request, res: Response): Promise<void>{
    //     const {id} = req.params;
    //     await pool.query('DELETE FROM lmz.courses WHERE COURSE_ID = ?', [id]);
    //     res.json({text: 'Curso eliminado'});
    // }
}

const loginController = new LoginController();
export default loginController;