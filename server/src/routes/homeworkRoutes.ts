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
        this.router.get('/list/:id', homeworkController.selectList);
        this.router.post('/one/:id', homeworkController.selectOneHomework);
        this.router.post('/', homeworkController.create);
        this.router.post('/note/:id', homeworkController.registerNoteHomework);
        this.router.put('/:id', homeworkController.delete);
    }  
}
const homeworkRoutes = new HomeworkRoutes();
export default homeworkRoutes.router;