import { Request, Response } from 'express';
import { ICourse } from '../interfaces/course.interface';
import * as courseService from '../services/course.service';

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getCourses();

    if (!courses) {
      res.status(404).json({ message: 'courses were not found' });;
    } else {
      res.status(200).send(courses);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getCourse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const course = await courseService.getCourse(id);

    if (!course) {
      res.status(404).json({ message: `course with id=${id} was not found` });
    } else {
      res.status(200).send(course);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
