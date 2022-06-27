import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Student } from './entities/student.entity';
import { Classroom } from './entities/classroom.entity';
import { Course } from './entities/course.entity';
import { Document } from './entities/document.entity';
import { Homework } from './entities/homework.entity';
import { School } from './entities/school.entity';
import { Session } from './entities/session.entity';
import { Teacher } from './entities/teacher.entity';

dotenv.config();

export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: { rejectedUnauthorized: true },
  entities: [ Student,Classroom,Course,School,Session,Teacher,Homework ,Document],
  logging: true,
  // synchronize: true
});