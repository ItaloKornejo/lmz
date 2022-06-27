import { Homework } from '../entities/homework.entity';
import { IHomework } from '../interfaces/homework.interface';
import homeworkRepository from '../repositories/homework.repository';


export const getHomeworks = async () => {
  const homeworks = await homeworkRepository.find();
  return homeworks ? homeworks : null;
}

export const getHomework = async (id: number) => {
  const homework = await homeworkRepository.findOneBy({ id });
  return homework ? homework : null;
}