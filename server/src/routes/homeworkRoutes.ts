import {Router} from 'express';
import homeworkController from '../controllers/homeworkController';


class HomeworkRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', homeworkController.list);
        this.router.get('/:id', homeworkController.getOne);
        this.router.post('/', homeworkController.create);
        this.router.delete('/:id', homeworkController.delete);
    }  
}
const homeworkRoutes = new HomeworkRoutes();
export default homeworkRoutes.router;