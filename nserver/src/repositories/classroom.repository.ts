import { appDataSource } from '../data-source';
import { Classroom } from '../entities/classroom.entity';

const classroomRepository = appDataSource.getRepository(Classroom);

export default classroomRepository;