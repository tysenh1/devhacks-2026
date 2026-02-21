import express, { Router } from 'express';
import * as userController from '../controllers/userController.ts'

const router: Router = express.Router();

router.post('/login', userController.login)

router.post('/register', userController.register)

router.get('/', userController.test)

export default router
