import { Router } from 'express';
import { getStudents, getStudent ,createStudent,updateStudentr,deleteStudent} from '../controllers/student.controller';


const router = Router();

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', createStudent);
router.put('/:id', updateStudentr);
router.delete('/:id', deleteStudent);

export default router;