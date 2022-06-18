'use strict';

const bcrypt = require("bcryptjs");
const faker = require("faker-br");

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaPadrao = bcrypt.hashSync("123456");
    const clientes = [];
    for(let i = 0; i < 1500; i++){
      const cliente = {
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        senha: senhaPadrao,
        cpf: faker.br.cpf(),
        endereco: {
          logradouro: faker.address.streetName(),
          numero: (faker.random.number({ min: 1, max: 99 }) * 10),
          complemento: "",
          bairro: faker.address.city(),
          cidade: faker.address.city(),
          estado: faker.address.stateAbbr(),
          cep: faker.address.zipCode()
        }
      };
      clientes.push(cliente);
    }

    const baseEnderecos = [...clientes.map((cliente) => cliente.endereco)];
    await queryInterface.bulkInsert('enderecos', baseEnderecos, { returning: true }).then(async (enderecoPrimeiroId) => {
      const enderecos = await queryInterface.sequelize.query(`SELECT id FROM enderecos WHERE id > ${enderecoPrimeiroId}`);
      let baseClientes = clientes.map((cliente) => {
        const endereco_id = enderecos[0].shift();
        if(cliente != undefined && endereco_id != undefined && "id" in endereco_id){
          return {
            nome: cliente.nome,
            email: cliente.email,
            senha: cliente.senha,
            cpf: cliente.cpf,
            endereco_id: endereco_id.id
          }
        }
      });
      baseClientes.pop();
      await queryInterface.bulkInsert('clientes', baseClientes, {});
    })
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
