import { Router } from 'express';
import { getClassroom, getClassrooms } from '../controllers/classroom.controller';


const router = Router();

router.get('/', getClassrooms);
router.get('/:id', getClassroom);

export default router;