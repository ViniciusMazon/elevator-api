'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      hash_password: Sequelize.STRING,
      role: Sequelize.ENUM('developer', 'designer', 'company'),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  },
};
