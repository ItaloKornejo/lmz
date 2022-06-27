import { Request, Response } from 'express';
import { ISchool } from '../interfaces/school.interface';
import * as schoolService from '../services/school.service';

export const getSchools = async (req: Request, res: Response) => {
  try {
    const schools = await schoolService.getSchools();

    if (!schools) {
      res.status(404).json({ message: 'schools were not found' });;
    } else {
      res.status(200).send(schools);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getSchool = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const school = await schoolService.getSchool(id);

    if (!school) {
      res.status(404).json({ message: `school with id=${id} was not found` });
    } else {
      res.status(200).send(school);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
