import { Opportunity } from '../entities/Opportunity';

export interface IOpportunitiesRepository {
  findById(id: string): Promise<Opportunity | null>;
  save(opportunity: Opportunity): Promise<void>;
}
