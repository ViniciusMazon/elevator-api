import { Router } from 'express';
import { createCompanyController } from './app/useCases/CreateCompany';

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
  }
}

export default new Routes();
