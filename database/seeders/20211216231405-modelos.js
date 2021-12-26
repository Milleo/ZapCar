'use strict';

var faker = require('faker-br');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const modelosSeed = [];

    for(let i = 0; i < 75; i++){
      modelosSeed.push({ nome: faker.vehicle.model(), marca_id: (faker.random.number(5) + 1) });
    }

    await queryInterface.bulkInsert('modelos', modelosSeed);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('modelos', null, {});
  }
};
