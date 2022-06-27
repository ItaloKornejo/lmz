import { School } from '../entities/school.entity';
import { ISchool } from '../interfaces/school.interface';
import schoolRepository from '../repositories/school.repository';


export const getSchools = async () => {
  const schools = await schoolRepository.find();
  return schools ? schools : null;
}

export const getSchool = async (id: number) => {
  const school = await schoolRepository.findOneBy({ id });
  return school ? school : null;
}