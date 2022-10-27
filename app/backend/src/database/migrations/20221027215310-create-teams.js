'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('teams', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
       team_Name: {
         type: Sequelize.STRING,
         allowNull: false
       },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('teams');
  }
};
