module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
        nome: DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
        cpf: DataTypes.STRING(15),
        endereco: DataTypes.INTEGER.UNSIGNED,
    }, {
        tableName: 'clientes',
        timestamps: true,
        paranoid: true
    });

    Cliente.associate = (models) => {
        Cliente.hasOne(models.Endereco, {
            as: "enderecoCliente",
            foreignKey: "endereco"
        });
    }

    return Cliente;
}