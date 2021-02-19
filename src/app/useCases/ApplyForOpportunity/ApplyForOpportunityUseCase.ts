import { ApplyForOpportunity } from '../../entities/ApplyForOpportunity';
import { IProfessionalsAndOpportunitiesRepository } from '../../repositories/IProfessionalsAndOpportunitiesRepository';
import { IProfessionalRepository } from '../../repositories/IProfessionalRepository';
import { IOpportunitiesRepository } from '../../repositories/IOpportunitiesRepository';
import { IApplyForOpportunityDTO } from './ApplyForOpportunityDTO';

export class ApplyForOpportunityUseCase {
  private professionalsAndOpportunitiesRepository: IProfessionalsAndOpportunitiesRepository;
  private professionalRepository: IProfessionalRepository;
  private opportunitiesRepository: IOpportunitiesRepository;

  constructor(
    professionalsAndOpportunitiesRepository: IProfessionalsAndOpportunitiesRepository,
    professionalRepository: IProfessionalRepository,
    opportunitiesRepository: IOpportunitiesRepository
  ) {
    this.professionalsAndOpportunitiesRepository = professionalsAndOpportunitiesRepository;
    this.professionalRepository = professionalRepository;
    this.opportunitiesRepository = opportunitiesRepository;
  }

  async execute(data: IApplyForOpportunityDTO) {
    const applyForOpportunity = new ApplyForOpportunity(data);

    const professionalExists = await this.professionalRepository.findById(
      data.professionalId
    );

    if (!professionalExists) {
      throw new Error('Professional not registered');
    }

    const opportunityExists = await this.opportunitiesRepository.findById(
      data.opportunityId
    );

    if (!opportunityExists) {
      throw new Error('Opportunity not registered');
    }

    await this.professionalsAndOpportunitiesRepository.save(
      applyForOpportunity
    );
  }
}
