module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("Servico",{
        nome: DataTypes.STRING(75),
        valor: DataTypes.DOUBLE,
        descricao: DataTypes.TEXT
    }, {
        tableName: 'servicos',
        timestamps: true,
        paranoid: true
    });

    Servico.associate = (models) => {
        Servico.belongsToMany(models.Reserva, { as: "reserva", foreignKey: "id" });
    }  

    return Servico;
}