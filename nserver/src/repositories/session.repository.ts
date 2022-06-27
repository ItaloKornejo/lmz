import { appDataSource } from '../data-source';
import { Session } from '../entities/session.entity';

const sessionRepository = appDataSource.getRepository(Session);

export default sessionRepository;