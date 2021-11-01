module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('veiculos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        ano: { type: Sequelize.DataTypes.STRING(4), allowNull: false },
        cor: { type: Sequelize.DataTypes.STRING(20), allowNull: false },
        placa: { type: Sequelize.DataTypes.STRING(7), allowNull: false },
        longitude: Sequelize.DataTypes.GEOMETRY('POINT'),
        latitude: Sequelize.DataTypes.GEOMETRY('POINT'),
        imagem: { type: Sequelize.DataTypes.STRING },
        modelo: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'modelos', key: 'id' } },
        centro: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'centros', key: 'id' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('veiculos');
    }
};