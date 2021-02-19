import Sequelize from 'sequelize';
import database from '../../database/connection';
class Opportunities extends Sequelize.Model {
  public id!: string;
  public videoURL!: string;
  public role!: string;
  public level!: string;
  public locality!: string;
  public contract!: string;
  public salary!: number;
  public companyId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Opportunities.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    videoURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    locality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contract: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salary: {
      type: Sequelize.DECIMAL(7, 2),
      allowNull: false,
    },
    companyId: {
      type: Sequelize.STRING,
      references: {
        model: 'Company',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
  }
);

export { Opportunities };
