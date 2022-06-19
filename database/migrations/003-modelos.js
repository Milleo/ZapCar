module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('modelos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        marca_id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'marcas', key: 'id' } },
        imagem: { type: Sequelize.DataTypes.STRING },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('modelos');
    }
};