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
        Reserva.hasOne(models.Cliente, { as: "clienteObj", foreignKey: "id" });
        Reserva.hasOne(models.Servico, { as: "servicoObj", foreignKey: "id" });
        Reserva.hasOne(models.Veiculo, { as: "veiculoObj", foreignKey: "id" });
    }

    return Reserva;
}