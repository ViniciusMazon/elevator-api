import { ProfessionalRepository } from '../../repositories/implementations/ProfessionalRepository';
import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';
import { CreateProfessionalController } from './CreateProfessionalController';

const professionalRepository = new ProfessionalRepository();

const createProfessionalUseCase = new CreateProfessionalUseCase(
  professionalRepository
);

const createProfessionalController = new CreateProfessionalController(
  createProfessionalUseCase
);

export { createProfessionalUseCase, createProfessionalController };
