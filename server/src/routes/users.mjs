import { Router } from 'express';
import { getAllUsers } from '../controllers/usersController.mjs';

const router = Router();

router.get('/', getAllUsers);

export default router;
