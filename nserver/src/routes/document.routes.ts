import { Router } from 'express';
import { getDocument, getDocuments } from '../controllers/document.controller';


const router = Router();

router.get('/', getDocuments);
router.get('/:id', getDocument);

export default router;