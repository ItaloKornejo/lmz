import { appDataSource } from '../data-source';
import { Document } from '../entities/document.entity';

const documentRepository = appDataSource.getRepository(Document);

export default documentRepository;