import { Request, Response } from 'express';
import { CreateOpportunityUseCase } from './CreateOpportunityUseCase';

export class CreateOpportunityController {
  private createOpportunityUseCase: CreateOpportunityUseCase;

  constructor(createOpportunityUseCase: CreateOpportunityUseCase) {
    this.createOpportunityUseCase = createOpportunityUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      videoURL,
      role,
      level,
      locality,
      contract,
      salary,
      companyId,
    } = request.body;

    try {
      await this.createOpportunityUseCase.execute({
        videoURL,
        role,
        level,
        locality,
        contract,
        salary,
        companyId,
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
