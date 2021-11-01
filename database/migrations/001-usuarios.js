module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuarios', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(100), allowNull: false },
        email: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        senha: { type: Sequelize.DataTypes.STRING, allowNull: false },
        ativo: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false, default: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
    }
};