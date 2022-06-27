import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TEACHERS')
export class Teacher extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'TEACHER_ID' })
  id!: number;

  @Column({ name: 'TEACHER_NAME' })
  name!: string;

  @Column({ name: 'TEACHER_LASTNAME' })
  lastname!: string;

  @CreateDateColumn({ name: 'TEACHER_CREATION' })
  creation!: Date;

  @Column({ name: 'TEACHER_STATUS' })
  status!: number;

  @Column({ name: 'SCHOOLS_SCHOOL_ID' })
  idSchool!: number;

  @Column({ name: 'COURSES_COURSE_ID' })
  idCourse!: number;

}