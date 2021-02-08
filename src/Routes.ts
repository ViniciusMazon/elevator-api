import { Router } from 'express';

class Routes {
  router = Router();

  constructor() {
    this.init();
  }

  init() {
    this.router.get('/', (request, response) => response.json({ ok: true }));
  }
}

export default new Routes();
