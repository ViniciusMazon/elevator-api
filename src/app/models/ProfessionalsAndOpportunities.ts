import Sequelize from 'sequelize';
import { uuid } from 'uuidv4';
import database from '../../database/connection';
import { Professional } from './Professional';
import { Opportunities } from './Opportunities';

class ProfessionalsAndOpportunities extends Sequelize.Model {
  public id!: string;
  public professionalId!: string;
  public opportunityId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ProfessionalsAndOpportunities.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    professionalId: {
      type: Sequelize.STRING,
      references: {
        model: 'Professional',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    opportunityId: {
      type: Sequelize.STRING,
      references: {
        model: 'Opportunities',
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

ProfessionalsAndOpportunities.belongsTo(Professional, {
  as: 'Professional',
  foreignKey: 'professionalId',
});

ProfessionalsAndOpportunities.belongsTo(Opportunities, {
  as: 'Opportunities',
  foreignKey: 'opportunityId',
});

export { ProfessionalsAndOpportunities };
