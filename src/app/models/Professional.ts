import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import database from '../../database/connection';

class Professional extends Sequelize.Model {
  public id!: string;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public hash_password!: string;
  public role!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Professional.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
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
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

Professional.addHook(
  'beforeSave',
  async (professional: Professional): Promise<void> => {
    if (professional.password) {
      professional.hash_password = await bcrypt.hash(professional.password, 10);
    }
  }
);

export { Professional };
