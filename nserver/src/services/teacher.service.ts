import { Teacher } from '../entities/teacher.entity';
import { ITeacher } from '../interfaces/teacher.interface';
import teacherRepository from '../repositories/teacher.repository';


export const getTeachers = async () => {
  const teachers = await teacherRepository.find();
  return teachers ? teachers : null;
}

export const getTeacher = async (id: number) => {
  const teacher = await teacherRepository.findOneBy({ id });
  return teacher ? teacher : null;
}