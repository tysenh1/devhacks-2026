import express, { Router } from 'express';
import * as userController from '../controllers/userControllers.ts'

const router: Router = express.Router();

router.post('/login', userController.login)
