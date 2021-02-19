import { Request, Response } from 'express';
import { ApplyForOpportunityUseCase } from './ApplyForOpportunityUseCase';

export class ApplyForOpportunityController {
  private applyForOpportunityUseCase: ApplyForOpportunityUseCase;

  constructor(applyForOpportunityUseCase: ApplyForOpportunityUseCase) {
    this.applyForOpportunityUseCase = applyForOpportunityUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { professionalId, opportunityId } = request.body;

    try {
      await this.applyForOpportunityUseCase.execute({
        professionalId,
        opportunityId,
      });
      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
