import { appDataSource } from '../data-source';
import { Homework } from '../entities/homework.entity';

const homeworkRepository = appDataSource.getRepository(Homework);

export default homeworkRepository;