import { Request, Response } from 'express';
import { CreateProfessionalUseCase } from './CreateProfessionalUseCase';

export class CreateProfessionalController {
  private createProfessionalUseCase: CreateProfessionalUseCase;

  constructor(createProfessionalUseCase: CreateProfessionalUseCase) {
    this.createProfessionalUseCase = createProfessionalUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, lastname, email, password, role } = request.body;

    try {
      await this.createProfessionalUseCase.execute({
        name,
        lastname,
        email,
        password,
        role,
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
