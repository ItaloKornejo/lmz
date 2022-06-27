import { Request, Response } from 'express';
import { ITeacher } from '../interfaces/teacher.interface';
import * as teacherService from '../services/teacher.service';

export const getTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await teacherService.getTeachers();

    if (!teachers) {
      res.status(404).json({ message: 'teachers were not found' });;
    } else {
      res.status(200).send(teachers);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getTeacher = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const teacher = await teacherService.getTeacher(id);

    if (!teacher) {
      res.status(404).json({ message: `teacher with id=${id} was not found` });
    } else {
      res.status(200).send(teacher);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
