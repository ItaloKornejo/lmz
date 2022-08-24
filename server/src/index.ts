import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import studentRoutes from './routes/studentRoutes';
import userRoutes from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';



class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();

    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }
    routes():void{
        this.app.use('/',indexRoutes)
        this.app.use('/api/student',studentRoutes)
        this.app.use('/api/user',userRoutes)
        this.app.use('/api/course',courseRoutes)

    }
    start():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();