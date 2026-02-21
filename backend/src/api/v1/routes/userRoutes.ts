import express, { Router } from 'express';
import * as userController from '../controllers/userController.ts'
import multer from 'multer';

const upload = multer({ dest: 'uploads/' })

const router: Router = express.Router();

router.post('/login', userController.login)


router.post('/update', upload.single('file'), userController.updateHealthInfo)

router.post('/register', userController.register)

router.get('/eligibility/:id', userController.vaccineEligiblityCheck)

router.get('/', userController.test)

export default router
