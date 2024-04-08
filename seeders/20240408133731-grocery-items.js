'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('grocery_items', [
      {
        name: 'Apple',
        price: 100,
        quantity: 10,
        description: 'Fresh apples',
        addedBy: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Banana',
        price: 50,
        quantity: 20,
        description: 'Ripe bananas',
        addedBy: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('grocery_items', null, {});
  },
};
