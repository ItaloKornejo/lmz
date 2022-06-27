import { Document } from '../entities/document.entity';
import { IDocument } from '../interfaces/document.interface';
import documentRepository from '../repositories/document.repository';


export const getDocuments = async () => {
  const documents = await documentRepository.find();
  return documents ? documents : null;
}

export const getDocument = async (id: number) => {
  const document = await documentRepository.findOneBy({ id });
  return document ? document : null;
}