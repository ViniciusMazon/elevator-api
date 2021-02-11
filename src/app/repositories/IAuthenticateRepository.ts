import { Company } from '../entities/Company';
import { Professional } from '../entities/Professional';

export interface IUserType {
  id: string;
  name: string;
  role: string;
}

export interface ISignType {
  token: string;
  user: IUserType;
}

export interface IAuthenticateRepository {
  findByEmail(email: string): Promise<Company | Professional | null>;
  validatePassword(password: string, hash_password: string): Promise<Boolean>;
  sign(id: string, name: string, role: string): ISignType;
}
