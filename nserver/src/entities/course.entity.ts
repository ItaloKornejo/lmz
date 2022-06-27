import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COURSES')
export class Course extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'COURSE_ID' })
  id!: number;

  @Column({ name: 'COURSE_NAME' })
  name!: string;

  @CreateDateColumn({ name: 'COURSE_CREATION' })
  creation!: Date;

  @Column({ name: 'COURSE_STATUS' })
  status!: number;

}