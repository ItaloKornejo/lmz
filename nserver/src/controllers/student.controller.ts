import { Request, Response } from 'express';
import { IStudent } from '../interfaces/student.interface';
import * as studentService from '../services/student.service';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getStudents();

    if (!students) {
      res.status(404).json({ message: 'students were not found' });;
    } else {
      res.status(200).send(students);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getStudent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const student = await studentService.getStudent(id);

    if (!student) {
      res.status(404).json({ message: `student with id=${id} was not found` });
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const studentDeleted = await studentService.deleteStudent(id);
    if (!studentDeleted) {
      res.status(404).json({ message: `student DELETE with id=${id} can not be deleted` });
    } else {
      res.status(200).send(studentDeleted);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const createStudent = async (req: Request, res: Response) => {
  try {
    const iStudent: IStudent = req.body;
    const student = await studentService.saveStudent(iStudent);
    res.status(200).send(student);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const updateStudentr = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const student = req.body;
    const studentUpdated = await studentService.updateStudent(id, student);

    if (!studentUpdated) {
      res.status(404).json({ message: `user UPDATE with id=${id} can not be updated` });
    } else {
      res.status(200).send(studentUpdated);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
