module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('centros', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        endereco: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'enderecos', key: 'id' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('centros');
    }
};