import { IUser } from './IUser';

export class Student implements IUser {
  id!: number;
  firstname!: String;
  lastname!: String;
  email!: String;
  password!: String;
}
