import {Router} from 'express';
import classroomController from '../controllers/classroomController';


class ClassroomRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', classroomController.list);
        this.router.get('/:id', classroomController.getOne);
        this.router.post('/', classroomController.create);

    }  
}
const classroomRoutes = new ClassroomRoutes();
export default classroomRoutes.router;