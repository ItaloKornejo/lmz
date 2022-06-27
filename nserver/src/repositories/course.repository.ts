import { appDataSource } from '../data-source';
import { Course } from '../entities/course.entity';

const courseRepository = appDataSource.getRepository(Course);

export default courseRepository;