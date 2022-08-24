import {Router} from 'express';
import courseController from '../controllers/courseController';


class CourseRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', courseController.list);
        this.router.get('/class', courseController.getClass);
        this.router.get('/:id', courseController.getOne);
        this.router.post('/', courseController.create);
        this.router.delete('/:id', courseController.delete);
    }  
}
const courseRoutes = new CourseRoutes();
export default courseRoutes.router;