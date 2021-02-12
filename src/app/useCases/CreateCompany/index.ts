import { CompanyRepository } from '../../repositories/implementations/CompanyRepository';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';
import { CreateCompanyController } from './CreateCompanyController';

const companyRepository = new CompanyRepository();

const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);

const createCompanyController = new CreateCompanyController(
  createCompanyUseCase
);

export { createCompanyUseCase, createCompanyController };
