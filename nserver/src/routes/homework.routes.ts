import { Router } from 'express';
import { getHomework, getHomeworks } from '../controllers/homework.controller';


const router = Router();

router.get('/', getHomeworks);
router.get('/:id', getHomework);

export default router;