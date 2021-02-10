import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import database from '../../database/connection';

class Company extends Sequelize.Model {
  public id!: string;
  public name!: string;
  public cnpj!: string;
  public email!: string;
  public password!: string;
  public hash_password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Company.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: Sequelize.VIRTUAL,
    hash_password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

Company.addHook(
  'beforeSave',
  async (company: Company): Promise<void> => {
    if (company.password) {
      company.hash_password = await bcrypt.hash(company.password, 10);
    }
  }
);

export { Company };
