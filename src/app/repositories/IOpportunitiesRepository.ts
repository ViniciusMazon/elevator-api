import { Opportunity } from '../entities/Opportunity';

export interface IOpportunitiesRepository {
  save(opportunity: Opportunity): Promise<void>;
}
