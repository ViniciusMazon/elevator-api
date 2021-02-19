import { OpportunitiesRepository } from '../../repositories/implementations/OpportunitiesRepository';
import { CompanyRepository } from '../../repositories/implementations/CompanyRepository';
import { CreateOpportunityUseCase } from './CreateOpportunityUseCase';
import { CreateOpportunityController } from './CreateOpportunityController';

const opportunitiesRepository = new OpportunitiesRepository();
const companyRepository = new CompanyRepository();
const createOpportunityUseCase = new CreateOpportunityUseCase(
  opportunitiesRepository,
  companyRepository
);

const createOpportunityController = new CreateOpportunityController(
  createOpportunityUseCase
);

export { createOpportunityUseCase, createOpportunityController };
