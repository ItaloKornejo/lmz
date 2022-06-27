import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import studentRoutes from './routes/student.routes';
import classroomRoutes from './routes/classroom.routes';
import courseRoutes from './routes/course.routes';
import documentRoutes from './routes/document.routes';
import homeworkRoutes from './routes/homework.routes';
import schoolRoutes from './routes/school.routes';
import sessionRoutes from './routes/session.routes';
import teacherRoutes from './routes/teacher.routes';

dotenv.config();
const app = express();
app.set('port', process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan(process.env.ENVIRONMENT!));
app.use(express.json());

// routes
app.use('/api/student',studentRoutes);
app.use('/api/classroom',classroomRoutes);
app.use('/api/course',courseRoutes);
app.use('/api/document',documentRoutes);
app.use('/api/homework',homeworkRoutes);
app.use('/api/school',schoolRoutes);
app.use('/api/session',sessionRoutes);
app.use('/api/teacher',teacherRoutes);

export default app;