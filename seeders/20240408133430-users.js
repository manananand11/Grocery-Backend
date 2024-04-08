'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Rahul Doe',
        phone: '8080808080',
        email: 'Rahul@example.com',
        type: 'user',
        gender: 'M',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mohan Doe',
        phone: '9797979797',
        email: 'mohan@example.com',
        type: 'admin',
        gender: 'F',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
