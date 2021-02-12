import { Company } from '../../entities/Company';
import { Professional } from '../../entities/Professional';
import { IAuthenticateRepository } from '../../repositories/IAuthenticateRepository';
import { IAuthenticateRequestDTO } from './AuthenticateDTO';

export class AuthenticateUseCase {
  private authenticateRepository: IAuthenticateRepository;

  constructor(authenticateRepository: IAuthenticateRepository) {
    this.authenticateRepository = authenticateRepository;
  }

  async execute(data: IAuthenticateRequestDTO) {
    const user = await this.authenticateRepository.findByEmail(data.email);

    if (!user) {
      throw new Error('User or password mismatch');
    }

    const passwordIsValid = await this.authenticateRepository.validatePassword(
      data.password,
      user.hash_password
    );

    if (!passwordIsValid) {
      throw new Error('User or password mismatch');
    }

    const {
      hash_password,
      createdAt,
      updatedAt,
      ...publicData
    } = user.dataValues;

    const authorization = this.authenticateRepository.sign(publicData.id, publicData);

    return authorization;
  }
}
