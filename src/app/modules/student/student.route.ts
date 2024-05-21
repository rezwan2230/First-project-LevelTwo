import express from 'express';
import { StudentControlers } from './student.controller';

const router = express.Router();

//will call controller function.
router.post('/create-student', StudentControlers.createStudent);

router.get('/', StudentControlers.getAllStudents);

router.get('/:studentId', StudentControlers.getSingleStudent);

export const StudentRoutes = router;
