import { AuthenticateRepository } from '../../repositories/implementations/AuthenticateRepository';
import { AuthenticateUseCase } from './AuthenticateUseCase';
import { AuthenticateController } from './AuthenticateController';

const authenticateRepository = new AuthenticateRepository();

const authenticateUseCase = new AuthenticateUseCase(authenticateRepository);

const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };
