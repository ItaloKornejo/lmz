import {Router} from 'express';
import studentController from '../controllers/studentController';


class StudentRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', studentController.list);
        this.router.get('/listmain/', studentController.listStudents);
        this.router.get('/pdf', studentController.getPdf);
        this.router.get('/:id', studentController.getOne);
        this.router.post('/', studentController.create);
        this.router.put('/:id',studentController.update);
        this.router.delete('/:id',studentController.delete);
    }  
}
const studentRoutes = new StudentRoutes();
export default studentRoutes.router;