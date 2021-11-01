module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("Usuario",{
        nome:  DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        tableName: 'usuarios',
        timestamps: true,
        paranoid: true
    });

    return Usuario;
}