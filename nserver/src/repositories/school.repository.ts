import { appDataSource } from '../data-source';
import { School } from '../entities/school.entity';

const schoolRepository = appDataSource.getRepository(School);

export default schoolRepository;