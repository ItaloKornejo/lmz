
import {request, Request, Response, text } from 'express';
import pool from '../database';

class StudentController {

    public async list (req: Request, res: Response){
        const estudiantes = await pool.query('SELECT * FROM estudiante');
        res.json(estudiantes);
        //res.json({text: 'LISTADO'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {id}  = req.params;
        const estudiante = await pool.query('SELECT * FROM estudiante WHERE idStudent = ?', [id]);
        if(estudiante.length > 0){
            return res.json(estudiante[0]);
        }
        console.log(estudiante);
        res.status(404).json({text: 'Estuadiante no encontrado'});
    }

    public async create (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO estudiante set ?', [req.body]);
        res.json({message: 'Estudiante Generado'});
    }

    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE estudiante set ? WHERE idStudent = ?', [req.body, id]);
        res.json({text: 'Estudiante actualizado'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM estudiante WHERE idStudent = ?', [id]);
        res.json({text: 'Estudiante eliminado'});
    }

}

const studentController = new StudentController();
export default studentController;