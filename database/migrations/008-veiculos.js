module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('veiculos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        ano: { type: Sequelize.DataTypes.STRING(4), allowNull: false },
        cor: { type: Sequelize.DataTypes.STRING(20), allowNull: false },
        placa: { type: Sequelize.DataTypes.STRING(7), allowNull: false },
        localizacao: Sequelize.DataTypes.GEOMETRY('POINT'),
        modelo_id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'modelos', key: 'id' }, allowNull: false },
        centro_id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'centros', key: 'id' }, allowNull: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('veiculos');
    }
};