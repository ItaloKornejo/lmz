import { Request, Response } from 'express';
import { ISession } from '../interfaces/session.interface';
import * as sessionService from '../services/session.service';

export const getSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await sessionService.getSessions();

    if (!sessions) {
      res.status(404).json({ message: 'sessions were not found' });;
    } else {
      res.status(200).send(sessions);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const getSession = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const session = await sessionService.getSession(id);

    if (!session) {
      res.status(404).json({ message: `session with id=${id} was not found` });
    } else {
      res.status(200).send(session);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
