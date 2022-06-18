'use strict';

const bcrypt = require("bcryptjs");
const faker = require("faker-br");

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaPadrao = bcrypt.hashSync("123456");
    const baseUsuarios = [
      {
        nome: "Admin",
        email: "admin@zapcar.com",
        senha: senhaPadrao,
        ativo: true
      }
    ];

    for(let i = 0; i < 100; i++){
      const usuario = {
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        senha: senhaPadrao,
        ativo: Math.random() < 0.75
      };

      baseUsuarios.push(usuario);
    }



    await queryInterface.bulkInsert('usuarios', baseUsuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
