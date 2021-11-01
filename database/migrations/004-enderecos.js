module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('enderecos', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        logradouro: { type: Sequelize.DataTypes.STRING(150), allowNull: false },
        numero: Sequelize.DataTypes.STRING(6),
        complemento: Sequelize.DataTypes.STRING(20),
        bairro: Sequelize.DataTypes.STRING(70),
        cidade: Sequelize.DataTypes.STRING(100),
        estado: Sequelize.DataTypes.STRING(2),
        cep: Sequelize.DataTypes.STRING(9),
        longitude: Sequelize.DataTypes.GEOMETRY('POINT'),
        latitude: Sequelize.DataTypes.GEOMETRY('POINT'),
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('enderecos');
    }
};