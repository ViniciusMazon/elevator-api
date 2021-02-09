'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Company', {
      id: Sequelize.STRING,
      name: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      email: Sequelize.STRING,
      hash_password: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Company');
  },
};
