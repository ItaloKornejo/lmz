import { Router } from 'express';
import { getTeacher, getTeachers } from '../controllers/teacher.controller';


const router = Router();

router.get('/', getTeachers);
router.get('/:id', getTeacher);

export default router;