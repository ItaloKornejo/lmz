import {Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response){
       res.json({text: 'La API es /api'});
    } 
}

export const indexController = new IndexController();