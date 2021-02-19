import { ProfessionalsAndOpportunitiesRepository } from '../../repositories/implementations/ProfessionalsAndOpportunitiesRepository';
import { ProfessionalRepository } from '../../repositories/implementations/ProfessionalRepository';
import { OpportunitiesRepository } from '../../repositories/implementations/OpportunitiesRepository';
import { ApplyForOpportunityUseCase } from './ApplyForOpportunityUseCase';
import { ApplyForOpportunityController } from './ApplyForOpportunityController';

const professionalsAndOpportunitiesRepository = new ProfessionalsAndOpportunitiesRepository();
const professionalRepository = new ProfessionalRepository();
const opportunitiesRepository = new OpportunitiesRepository();

const applyForOpportunityUseCase = new ApplyForOpportunityUseCase(
  professionalsAndOpportunitiesRepository,
  professionalRepository,
  opportunitiesRepository
);

const applyForOpportunityController = new ApplyForOpportunityController(
  applyForOpportunityUseCase
);

export { applyForOpportunityUseCase, applyForOpportunityController };
