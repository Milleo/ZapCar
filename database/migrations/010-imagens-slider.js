module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('imagens_slider', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        titulo: { type: Sequelize.DataTypes.STRING(150) },
        texto: { type: Sequelize.DataTypes.TEXT },
        imagem: { type: Sequelize.DataTypes.STRING(200) },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('imagens_slider');
    }
};