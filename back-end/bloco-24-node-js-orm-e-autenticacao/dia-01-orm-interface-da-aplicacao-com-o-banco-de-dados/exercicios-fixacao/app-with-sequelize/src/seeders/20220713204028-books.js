'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
        { title: 'Livro A', author: 'Pedro', page_quantity: 111, 
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'), },
        { title: 'Livro B', author: 'Lipe', page_quantity: 222,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'), },
        { title: 'Livro C', author: 'Ruy', page_quantity: 333,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'), },
        { title: 'Livro D', author: 'Luquinha', page_quantity: 444,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'), },
    ], {})
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', null, {});
  }
};
