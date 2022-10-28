'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('matches', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_team: {
       type: Sequelize.INTEGER,
        allowNull: false,
      },
      home_team_goals: {
       type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team: {
       type: Sequelize.INTEGER,
        allowNull: false,
      },
      away_team_goals: {
       type: Sequelize.INTEGER,
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }, });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('matches');
  }
};
