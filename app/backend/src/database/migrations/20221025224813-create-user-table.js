'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('users',{

       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        role: {
          type: Sequelize.STRING,
          allowNull: false
        }
        });
      },
      
      down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         */
        await queryInterface.dropTable('users');
      }
    };
    