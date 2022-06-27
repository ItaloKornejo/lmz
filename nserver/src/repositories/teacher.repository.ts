import { appDataSource } from '../data-source';
import { Teacher } from '../entities/teacher.entity';

const teacherRepository = appDataSource.getRepository(Teacher);

export default teacherRepository;