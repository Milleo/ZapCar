module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("Reserva",{
        retirada:  DataTypes.DATE,
        retornoPrevisto: DataTypes.DATE,
        retorno: DataTypes.DATE,
        valorTotal: DataTypes.DOUBLE,
        cliente: DataTypes.INTEGER.UNSIGNED,
        veiculo: DataTypes.INTEGER.UNSIGNED,
        servico: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'reservas',
        timestamps: true,
        paranoid: true
    });

    Reserva.associate = (models) => {
        Reserva.belongsToMany(models.Cliente, { as: "cliente", foreignKey: "id" });
        Reserva.belongsToMany(models.Servico, { as: "servico", foreignKey: "id" });
        Reserva.belongsToMany(models.Veiculo, { as: "veiculo", foreignKey: "id" });
    }

    return Reserva;
}