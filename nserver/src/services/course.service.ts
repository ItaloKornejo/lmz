import { Course } from '../entities/course.entity';
import { ICourse } from '../interfaces/course.interface';
import courseRepository from '../repositories/course.repository';


export const getCourses = async () => {
  const courses = await courseRepository.find();
  return courses ? courses : null;
}

export const getCourse = async (id: number) => {
  const course = await courseRepository.findOneBy({ id });
  return course ? course : null;
}