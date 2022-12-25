import { Subject } from './subject.model';

export interface Speciality {
  idSpeciality: number;
  nameSpeciality: String;
  subjects: Subject[];
}
