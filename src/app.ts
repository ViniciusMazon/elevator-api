import express, { json, request, response } from 'express';
import cors from 'cors';

import routes from './Routes';
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(json());
  }

  routes() {
    this.express.use(routes.router);
  }

  init() {
    this.express.listen(process.env.PORT || 3333, () =>
      console.log('⚡ Server is running')
    );
  }
}

export default new App();
