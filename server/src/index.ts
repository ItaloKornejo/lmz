import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import studentRoutes from './routes/studentRoutes';
import userRoutes from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';
import homeworkRoutes from './routes/homeworkRoutes';
import classroomRoutes from './routes/classroomRoutes';
import sessionRoutes from './routes/sessionRoutes';
import loginRoutes from './routes/loginRoutes';



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
        this.app.use('/',indexRoutes);
        this.app.use('/api/student',studentRoutes);
        this.app.use('/api/user',userRoutes);
        this.app.use('/api/course',courseRoutes);
        this.app.use('/api/homework',homeworkRoutes);
        this.app.use('/api/classroom',classroomRoutes);
        this.app.use('/api/session',sessionRoutes);
        this.app.use('/api/login',loginRoutes);



    }
    start():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();