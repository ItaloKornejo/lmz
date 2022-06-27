import { Classroom } from '../entities/classroom.entity';
import { IClassroom } from '../interfaces/classroom.interface';
import classroomRepository from '../repositories/classroom.repository';


export const getClassrooms = async () => {
  const classrooms = await classroomRepository.find();
  return classrooms ? classrooms : null;
}

export const getClassroom = async (id: number) => {
  const classroom = await classroomRepository.findOneBy({ id });
  return classroom ? classroom : null;
}