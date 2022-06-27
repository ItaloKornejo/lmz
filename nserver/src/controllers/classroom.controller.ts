import { Request, Response } from 'express';
import { IClassroom } from '../interfaces/classroom.interface';
import * as classroomService from '../services/classroom.service';

export const getClassrooms = async (req: Request, res: Response) => {
  try {
    const classrooms = await classroomService.getClassrooms();

    if (!classrooms) {
      res.status(404).json({ message: 'classrooms were not found' });;
    } else {
      res.status(200).send(classrooms);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getClassroom = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const classroom = await classroomService.getClassroom(id);

    if (!classroom) {
      res.status(404).json({ message: `classroom with id=${id} was not found` });
    } else {
      res.status(200).send(classroom);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

