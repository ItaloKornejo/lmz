import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('HOMEWORKS')
export class Homework extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'HOMEWORK_ID' })
  id!: number;

  @Column({ name: 'HOMEWORK_NAME' })
  name!: string;

  @Column({ name: 'HOMEWORK_IMAGE', type:"mediumblob" })
  image!: Blob;

  @CreateDateColumn({ name: 'HOMEWORK_CREATION' })
  creation!: Date;

  @Column({ name: 'HOMEWORK_STATUS' })
  status!: number;

  @Column({ name: 'STUDENTS_STUDENT_ID' })
  idStudent!: number;

  @Column({ name: 'COURSES_COURSE_ID' })
  idCourse!: number;
  
  @Column({ name: 'SESSIONS_SESSION_ID' })
  idSession!: number;

}