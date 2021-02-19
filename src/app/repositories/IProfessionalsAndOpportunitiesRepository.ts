import { ApplyForOpportunity } from '../entities/ApplyForOpportunity';

export interface IProfessionalsAndOpportunitiesRepository {
  save(applyForOpportunity: ApplyForOpportunity): Promise<void>;
}
