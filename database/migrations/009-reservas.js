module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('reservas', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        retirada: { type: Sequelize.DataTypes.DATE, allowNull: false },
        retornoPrevisto: { type: Sequelize.DataTypes.DATE },
        retorno: { type: Sequelize.DataTypes.DATE },
        valorTotal: { type: Sequelize.DataTypes.DOUBLE, allowNull: false },
        cliente: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'clientes', key: 'id' } },
        veiculo: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'veiculos', key: 'id' } },
        servico: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'servicos', key: 'id' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('reservas');
    }
};