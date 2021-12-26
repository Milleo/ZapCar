const bcrypt = require("bcrypt");

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.insert('usuarios', {
        nome: 'Administrador',
        email: 'admin@zapcar.com.br',
        senha: bcrypt.hashSync("123456", 10),
        ativo: true
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
    }
  };