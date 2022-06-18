'use strict';

const faker = require("faker-br");

module.exports = {
  async up (queryInterface, Sequelize) {
    const lojas = [];
    for(let i = 0; i < 15; i++){
      const loja = {
        nome: faker.address.city(),
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
      lojas.push(loja);
    }

    const baseEnderecos = [...lojas.map((loja) => loja.endereco)];
    await queryInterface.bulkInsert('enderecos', baseEnderecos, { returning: true }).then(async (enderecoPrimeiroId) => {
      const enderecos = await queryInterface.sequelize.query(`SELECT id FROM enderecos WHERE id > ${enderecoPrimeiroId}`);
      let baseLojas = lojas.map((loja) => {
        const endereco_id = enderecos[0].shift();
        if(loja != undefined && endereco_id != undefined && "id" in endereco_id){
          return {
            nome: loja.nome,
            endereco_id: endereco_id.id
          }
        }
      });
      baseLojas.pop();
      await queryInterface.bulkInsert('centros', baseLojas, {});
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
