module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('servicos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        valor: { type: Sequelize.DataTypes.DOUBLE, allowNull: false },
        descricao: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('servicos');
    }
};