import { Router } from 'express';
const router = Router();
import user from './user.router.js';

//++++++++++++++++++++++++++users++++++++++++++++++++++++++++++++
router.use('/user', user)


//export 
export default router;
