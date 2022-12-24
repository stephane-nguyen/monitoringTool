import { IUser } from './IUser';

export class Teacher implements IUser {
  id!: number;
  firstname!: String;
  lastname!: String;
  email!: String;
  password!: String;
}
