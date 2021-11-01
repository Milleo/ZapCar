module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('modelos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        marca: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'modelos', key: 'id' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('modelos');
    }
};