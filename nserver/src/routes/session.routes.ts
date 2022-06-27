import { Router } from 'express';
import { getSession, getSessions } from '../controllers/session.controller';


const router = Router();

router.get('/', getSessions);
router.get('/:id', getSession);

export default router;