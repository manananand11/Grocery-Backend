'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_items', [
      {
        orderId: 1,
        groceryItemId: 5,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 1,
        groceryItemId: 6,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        groceryItemId: 5,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        groceryItemId: 6,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_items', null, {});
  },
};
