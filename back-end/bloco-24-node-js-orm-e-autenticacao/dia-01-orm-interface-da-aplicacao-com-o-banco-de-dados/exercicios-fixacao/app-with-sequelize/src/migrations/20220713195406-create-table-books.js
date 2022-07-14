'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'page_quantity' 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'updated_at'
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
