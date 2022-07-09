import { Student } from '../entities/student.entity';
import { IStudent } from '../interfaces/student.interface';
import studentRepository from '../repositories/student.repositoryr';


export const getStudents = async () => {
  const students = await studentRepository.find();
  return students ? students : null;
}

export const getStudent = async (id: number) => {
  const student = await studentRepository.findOneBy({ id });
  return student ? student : null;
}

export const deleteStudent = async (id: number) => {
  const student = await studentRepository.findOneBy({ id });
  if (student) {
    return await studentRepository.delete(student.id) ? student : null;
  } else {
    return null;
  }
}

export const saveStudent = async (iStudent: IStudent) => {
  const student = new Student();
  student.name = iStudent.name;
  student.lastname = iStudent.lastname;
  student.idClassroom = iStudent.idClassroom;
  student.idSchool = iStudent.idSchool;

  return await studentRepository.save(student);
}

export const updateStudent = async (id: number, iStudent: IStudent) => {
  const student = await studentRepository.findOneBy({ id });
  if (student) {
    const studentUpdated = new Student();
    studentUpdated.name = iStudent.name;

    return await studentRepository.update(student.id, studentUpdated) ? studentUpdated : null;
  } else {
    return null;
  }
}

