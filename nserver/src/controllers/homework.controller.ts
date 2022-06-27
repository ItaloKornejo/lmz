import { Request, Response } from 'express';
import { IHomework } from '../interfaces/homework.interface';
import * as homeworkService from '../services/homework.service';

export const getHomeworks = async (req: Request, res: Response) => {
  try {
    const homeworks = await homeworkService.getHomeworks();

    if (!homeworks) {
      res.status(404).json({ message: 'homeworks were not found' });;
    } else {
      res.status(200).send(homeworks);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getHomework = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const homework = await homeworkService.getHomework(id);

    if (!homework) {
      res.status(404).json({ message: `homework with id=${id} was not found` });
    } else {
      res.status(200).send(homework);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
