'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfessionalsAndOpportunities', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      professionalId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Professional',
          key: 'id',
        },
      },
      opportunityId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Opportunities',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProfessionalsAndOpportunities');
  },
};
