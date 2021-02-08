import Sequelize from 'sequelize';

import databaseConfig from '../config/sequelize';

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    let config = {};
    switch (process.env.NODE_ENV) {
      case 'production':
        config = databaseConfig.production;
        break;
      case 'development':
        config = databaseConfig.development;
        break;
      case 'test':
        config = databaseConfig.test;
        break;
      default:
        config = databaseConfig.development;
        break;
    }

    this.connection = new Sequelize.Sequelize(config);
  }
}

const database: Database = new Database();

export default database;
