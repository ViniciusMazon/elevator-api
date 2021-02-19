import { ApplyForOpportunity } from '../../entities/ApplyForOpportunity';
import { IProfessionalsAndOpportunitiesRepository } from '../IProfessionalsAndOpportunitiesRepository';
import { ProfessionalsAndOpportunities as ProfessionalsAndOpportunitiesModel } from '../../models/ProfessionalsAndOpportunities';

export class ProfessionalsAndOpportunitiesRepository
  implements IProfessionalsAndOpportunitiesRepository {
  async save(applyForOpportunity: ApplyForOpportunity): Promise<void> {
    await ProfessionalsAndOpportunitiesModel.create(applyForOpportunity);
  }
}
