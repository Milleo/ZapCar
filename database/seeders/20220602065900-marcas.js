'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const marcas = [
      { nome: "Audi" },
      { nome: "BMW" },
      { nome: "Chevrolet" },
      { nome: "Fiat" },
      { nome: "Volkswagen" },
      { nome: "Renault" },
      { nome: "Peugeot" },
      { nome: "Citroen" },
      { nome: "Hyundai" },
      { nome: "Mitsubishi" },
      { nome: "KIA" },
      { nome: "Ford" },
      { nome: "Honda" },
      { nome: "Toyota"},
    ];
    queryInterface.bulkInsert('marcas', marcas, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('marcas', null, {});
  }
};
