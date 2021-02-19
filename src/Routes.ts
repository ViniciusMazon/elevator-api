import { request, response, Router } from 'express';
import { createCompanyController } from './app/useCases/CreateCompany';
import { createProfessionalController } from './app/useCases/CreateProfessional';
import { authenticateController } from './app/useCases/Authenticate';
import { createOpportunityController } from './app/useCases/CreateOpportunity';
import { applyForOpportunityController } from './app/useCases/ApplyForOpportunity';

import authorization from './app/middlewares/Authorization';

class Routes {
  router = Router();

  constructor() {
    this.init();
  }

  init() {
    // Public routes
    this.router.post('/sing-up/company', (request, response) => {
      return createCompanyController.handle(request, response);
    });

    this.router.post('/sing-up/professional', (request, response) => {
      return createProfessionalController.handle(request, response);
    });

    this.router.post('/authenticate', (request, response) => {
      return authenticateController.handle(request, response);
    });

    // Private routes
    this.router.get(
      '/test',
      (request, response, next) =>
        authorization.handle(request, response, next),
      (request, response) => response.json({ ok: true })
    );

    this.router.post(
      '/opportunity',
      (request, response, next) =>
        authorization.handle(request, response, next),
      (request, response) => {
        return createOpportunityController.handle(request, response);
      }
    );

    this.router.post(
      '/apply-for-opportunity',
      (request, response, next) =>
        authorization.handle(request, response, next),
      (request, response) => {
        return applyForOpportunityController.handle(request, response);
      }
    );
  }
}

export default new Routes();
