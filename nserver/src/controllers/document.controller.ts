import { Request, Response } from 'express';
import { IDocument } from '../interfaces/document.interface';
import * as documentService from '../services/document.service';

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await documentService.getDocuments();

    if (!documents) {
      res.status(404).json({ message: 'documents were not found' });;
    } else {
      res.status(200).send(documents);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getDocument = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const document = await documentService.getDocument(id);

    if (!document) {
      res.status(404).json({ message: `document with id=${id} was not found` });
    } else {
      res.status(200).send(document);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
