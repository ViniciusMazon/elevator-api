import { Company } from '../../entities/Company';
import { Professional } from '../../entities/Professional';
import { IAuthenticateRepository } from '../IAuthenticateRepository';
import { Company as CompanyModel } from '../../models/Company';
import { Professional as ProfessionalModel } from '../../models/Professional';
import { ISignType } from '../IAuthenticateRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class AuthenticateRepository implements IAuthenticateRepository {
  async findByEmail(email: string): Promise<Company | Professional | null> {
    const professional = await ProfessionalModel.findOne({
      where: { email: email },
    });
    if (professional) return professional;

    const company = await CompanyModel.findOne({ where: { email: email } });
    if (company) return company;

    return null;
  }

  async validatePassword(
    password: string,
    hash_password: string
  ): Promise<Boolean> {
    const result = await bcrypt.compare(password, hash_password);
    return result;
  }

  sign(id: string, name: string, role: string): ISignType {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    const authorization = {
      token: `Bearer ${token}`,
      user: {
        id,
        name,
        role,
      },
    };

    return authorization;
  }
}
