import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn ,OneToMany} from 'typeorm';
import { Student } from "./student.entity"

@Entity('CLASSROOMS')
export class Classroom extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'CLASSROOM_ID' })
  id!: number;

  @Column({ name: 'CLASSROOM_NAME' })
  name!: string;

  @Column({ name: 'CLASSROOM_GRADE' })
  grade!: string;

  @CreateDateColumn({ name: 'CLASSROOM_CREATION',type: "datetime" })
  creation!: Date;

  @Column({ name: 'CLASSROOM_STATUS' })
  status!: number;

  @OneToMany(() => Student, (student) => student.classroom)
  students!: Student[];

}