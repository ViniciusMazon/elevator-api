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

  sign(user: Company | Professional): ISignType {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user.id }, String(secret), {
      expiresIn: '7d',
    });

    const authorization = {
      token: `Bearer ${token}`,
      user: {
        id: user.id,
        name: user.name,
        role: user.role || 'company',
      },
    };

    return authorization;
  }
}
