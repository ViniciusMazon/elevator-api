import { Opportunity } from '../../entities/Opportunity';
import { IOpportunitiesRepository } from '../IOpportunitiesRepository';
import { Opportunities as OpportunitiesModel } from '../../models/Opportunities';

export class OpportunitiesRepository implements IOpportunitiesRepository {
  async save(opportunity: Opportunity): Promise<void> {
    await OpportunitiesModel.create(opportunity);
  }
}
