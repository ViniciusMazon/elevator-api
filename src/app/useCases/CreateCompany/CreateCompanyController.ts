import { Request, Response } from 'express';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

export class CreateCompanyController {
  private createCompanyUseCase: CreateCompanyUseCase;

  constructor(createCompanyUseCase: CreateCompanyUseCase) {
    this.createCompanyUseCase = createCompanyUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cnpj, email, password } = request.body;

    try {
      await this.createCompanyUseCase.execute({
        name,
        cnpj,
        email,
        password,
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
