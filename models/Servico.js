module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define("Servico",{
        nome: DataTypes.STRING(75),
        valor: DataTypes.DOUBLE,
        descricao: DataTypes.TEXT
    }, {
        tableName: 'servicos',
        timestamps: true,
        paranoid: true
    });

    Servico.associate = (models) => {
        Servico.hasOne(models.Reserva, { as: "reserva", foreignKey: "id" });
    }  

    return Servico;
}