import { Company } from '../entities/Company';
import { Professional } from '../entities/Professional';

export interface ISignType {
  token: String;
  user: Object;
}

export interface IAuthenticateRepository {
  findByEmail(email: string): Promise<Company | Professional | null>;
  validatePassword(password: string, hash_password: string): Promise<Boolean>;
  sign(id: String, publicData: Object): ISignType;
}
