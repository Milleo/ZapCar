module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
        nome: DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
        cpf: DataTypes.STRING(15),
        endereco_id: DataTypes.INTEGER.UNSIGNED,
    }, {
        tableName: 'clientes',
        timestamps: true,
        paranoid: true
    });

    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Endereco, { as: "endereco", foreignKey: "endereco_id" });
        Cliente.belongsToMany(models.Veiculo, {
            as: "veiculos",
            foreignKey: "cliente_id",
            otherKey: "veiculo_id",
            through: "reservas"
        });
    }

    return Cliente;
}