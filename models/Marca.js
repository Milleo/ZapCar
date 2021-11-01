module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define("Marca",{
        nome:  DataTypes.STRING(75)
    }, {
        tableName: 'marcas',
        timestamps: true,
        paranoid: true
    });

    return Marca;
}