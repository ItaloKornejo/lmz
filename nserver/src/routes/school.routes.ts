import { Router } from 'express';
import { getSchool, getSchools } from '../controllers/school.controller';


const router = Router();

router.get('/', getSchools);
router.get('/:id', getSchool);

export default router;