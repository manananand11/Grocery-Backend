'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        amount: 150,
        userId: 1,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 50,
        userId: 11,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 100,
        userId: 13,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  },
};
