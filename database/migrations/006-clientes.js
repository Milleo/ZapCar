module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('clientes', {
        id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING(100), allowNull: false },
        email: { type: Sequelize.DataTypes.STRING(75), allowNull: false },
        senha: { type: Sequelize.DataTypes.STRING, allowNull: false },
        cpf: { type: Sequelize.DataTypes.STRING(15), allowNull: false, default: false },
        endereco_id: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'enderecos', key: 'id' }, allowNull: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('clientes');
    }
};