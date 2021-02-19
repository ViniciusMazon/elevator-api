import { Opportunity } from '../../entities/Opportunity';
import { IOpportunitiesRepository } from '../../repositories/IOpportunitiesRepository';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
import { ICreateOpportunityRequestDTO } from './CreateOpportunityDTO';

export class CreateOpportunityUseCase {
  private opportunitiesRepository: IOpportunitiesRepository;
  private companyRepository: ICompanyRepository;

  constructor(
    opportunitiesRepository: IOpportunitiesRepository,
    companyRepository: ICompanyRepository
  ) {
    this.opportunitiesRepository = opportunitiesRepository;
    this.companyRepository = companyRepository;
  }

  async execute(data: ICreateOpportunityRequestDTO) {
    const opportunity = new Opportunity(data);

    const companyExists = await this.companyRepository.findById(data.companyId);

    if (!companyExists) {
      throw new Error('Company not registered');
    }

    await this.opportunitiesRepository.save(opportunity);
  }
}
