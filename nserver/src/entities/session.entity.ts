import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SESSIONS')
export class Session extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'SESSION_ID' })
  id!: number;

  @Column({ name: 'SESSION_NAME' })
  name!: string;

  @Column({ name: 'SESSION_INI' })
  ini!: Date;

  @Column({ name: 'SESSION_END' })
  end!: Date;

  @CreateDateColumn({ name: 'SESSION_CREATION' })
  creation!: Date;

  @Column({ name: 'SESSION_STATUS' })
  status!: number;

}