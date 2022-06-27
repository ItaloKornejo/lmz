import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SCHOOLS')
export class School extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'SCHOOL_ID' })
  id!: number;

  @Column({ name: 'SCHOOL_NAME' })
  name!: string;

  @Column({ name: 'SCHOOL_TYPE' })
  type!: string;

  @CreateDateColumn({ name: 'SCHOOL_CREATION' })
  creation!: Date;

  @Column({ name: 'SCHOOL_STATUS' })
  status!: number;

}