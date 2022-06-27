import { Session } from '../entities/session.entity';
import { ISession } from '../interfaces/session.interface';
import sessionRepository from '../repositories/session.repository';


export const getSessions = async () => {
  const sessions = await sessionRepository.find();
  return sessions ? sessions : null;
}

export const getSession = async (id: number) => {
  const session = await sessionRepository.findOneBy({ id });
  return session ? session : null;
}