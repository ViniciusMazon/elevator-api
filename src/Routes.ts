import { Router } from 'express';
import { createCompanyController } from './app/useCases/CreateCompany';
import { createProfessionalController } from './app/useCases/CreateProfessional';
import { authenticateController } from './app/useCases/Authenticate';

class Routes {
  router = Router();

  constructor() {
    this.init();
  }

  init() {
    this.router.get('/', (request, response) => response.json({ ok: true }));

    this.router.post('/sing-up/company', (request, response) => {
      return createCompanyController.handle(request, response);
    });

    this.router.post('/sing-up/professional', (request, response) => {
      return createProfessionalController.handle(request, response);
    });

    this.router.post('/authenticate', (request, response) => {
      return authenticateController.handle(request, response);
    });
  }
}

export default new Routes();
