'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const servicos = [
      { nome: "Basic", valor: 150.00, descricao: "Alugue veículos para até 50KM de rodagem" },
      { nome: "Gold", valor: 200.00, descricao: "Alugue veículos para até 250KM de rodagem" },
      { nome: "Diamond", valor: 400.00, descricao: "Alugue veículos para até 600KM de rodagem" },
      { nome: "Platinum", valor: 600.00, descricao: "Alugue veículos com rodagem ilimitada" }
    ];
    queryInterface.bulkInsert('servicos', servicos, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('servicos', null, {});
  }
};
