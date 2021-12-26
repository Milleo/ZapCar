'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const marcasSeed = [
      { nome: "BWM" },
      { nome: "Chevrolet" },
      { nome: "Audi" },
      { nome: "Volkswagen" },
      { nome: "Citroen" },
      { nome: "GM" },
    ];
    await queryInterface.bulkInsert('marcas', marcasSeed)
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('marcas', null, {});
  }
};
