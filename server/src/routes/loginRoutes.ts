import {Router} from 'express';
import loginController from '../controllers/loginController';


class LoginRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', loginController.list);
        this.router.post('/isAuth', loginController.getAuth);
        this.router.get('/:id', loginController.getOne);
        this.router.post('/', loginController.create);
    }  
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;