import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DOCUMENTS')
export class Document extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'DOCUMENT_ID' })
  id!: number;

  @Column({ name: 'DOCUMENT_NAME' })
  name!: string;

  @Column({ name: 'DOCUMENT_FILE',type:"mediumblob" })
  file!: Blob;

  @CreateDateColumn({ name: 'DOCUMENT_DATE' })
  Date!: Date;

  @Column({ name: 'DOCUMENT_STATUS' })
  status!: number;

  @Column({ name: 'COURSES_COURSE_ID' })
  idCourse!: number;

  @Column({ name: 'SESSIONS_SESSION_ID' })
  idSession!: number;

}