import { Opportunity } from '../../entities/Opportunity';
import { IOpportunitiesRepository } from '../IOpportunitiesRepository';
import { Opportunities as OpportunitiesModel } from '../../models/Opportunities';

export class OpportunitiesRepository implements IOpportunitiesRepository {
  async findById(id: string): Promise<Opportunity | null> {
    const opportunity = await OpportunitiesModel.findOne({
      where: { id: id },
    });

    return opportunity;
  }

  async save(opportunity: Opportunity): Promise<void> {
    await OpportunitiesModel.create(opportunity);
  }
}
