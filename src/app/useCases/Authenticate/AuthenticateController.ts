import { Request, Response } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';

export class AuthenticateController {
  private authenticateUseCase: AuthenticateUseCase;

  constructor(authenticateUseCase: AuthenticateUseCase) {
    this.authenticateUseCase = authenticateUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const token = await this.authenticateUseCase.execute({ email, password });
      return response.status(200).json(token);
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
