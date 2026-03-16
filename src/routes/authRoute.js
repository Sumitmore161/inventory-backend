import express from 'express';
import { registerUser,loginUser } from '../controllers/userController.js';
import validateUser from '../middlewares/inputValidator.js'
const router = express.Router();

router.post('/register', registerUser);

// login 
router.post('/login', validateUser, loginUser);
export default router;
