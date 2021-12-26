'use strict';

var faker = require('faker-br');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 250; i++){
      queryInterface.insert('clientes', {
        nome: faker.name.firstName() + faker.name.lastName(),
        email: faker.internet.email(),
        senha: "123456",
        cpf: faker.br.cpf()
      })
    }
    for(let i = 0; i < 70; i++){
      queryInterface.insert('veiculos', {
        modelo: ( faker.random.number(50) + 1)
      })
    }
    for(let i = 0; i < 175; i++){
      queryInterface.insert('reservas', {
        cliente_id: ( faker.random.number(250) + 1),
        veiculo_id: ( faker.random.number(70) + 1)
      })
    }
    
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
