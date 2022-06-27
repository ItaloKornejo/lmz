import { appDataSource } from '../data-source';
import { Student } from '../entities/student.entity';

const studentRepository = appDataSource.getRepository(Student);

export default studentRepository;