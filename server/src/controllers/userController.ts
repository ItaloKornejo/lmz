import { User } from "../../../server/src/models/user";
import {request, Request, Response, text } from 'express';
import pool from '../database';

class UserController {

    public async list (req: Request, res: Response){
        const users = await pool.query('SELECT * FROM lmz.USERS');
        res.json(users);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const user = await pool.query('SELECT * FROM USERS WHERE USER_ID = ?', [id]);
        if(user.length > 0){
            return res.json(user[0]);
        }
        console.log(user);
        res.status(404).json({text: 'Usuario noX encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO USERS set ?', [req.body]);
        res.json({message: 'Usuario Generado'});
    }

    public async getUsercheck (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        const user: User = req.body;
        await pool.query(`call USER_EXIST(${user.nameUser},${user.passwordUser})`);
        res.json({message: 'Usuario Generado Z'});
    }
}

const userController = new UserController();
export default userController;