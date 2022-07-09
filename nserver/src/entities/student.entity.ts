import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,ManyToOne} from 'typeorm';
import { Classroom } from "./classroom.entity";
@Entity('STUDENTS')
export class Student extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'STUDENT_ID' })
  id!: number;

  @Column({ name: 'STUDENT_NAME' })
  name!: string;

  @Column({ name: 'STUDENT_LASTNAME' })
  lastname!: string;

  @Column({ name: 'STUDENT_PHONE' })
  phone!: number;

  @CreateDateColumn({ name: 'STUDENT_CREATION' })
  creation!: Date;

  @Column({ name: 'STUDENT_STATUS' })
  status!: number;

  @Column({ name: 'CLASSROOMS_CLASSROOM_ID' })
  idClassroom!: number;

  @Column({ name: 'SCHOOLS_SCHOOL_ID' })
  idSchool!: number;

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom!: Classroom[];
}