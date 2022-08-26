import {Router} from 'express';
import sessionController from '../controllers/sessionController';


class SessionRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', sessionController.list);
        this.router.get('/:id', sessionController.getOne);
        this.router.post('/', sessionController.create);
        this.router.delete('/:id', sessionController.delete);
    }  
}
const sessionRoutes = new SessionRoutes();
export default sessionRoutes.router;