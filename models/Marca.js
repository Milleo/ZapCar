module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define("Marca",{
        nome:  DataTypes.STRING(75)
    }, {
        tableName: 'marcas',
        timestamps: true,
        paranoid: true
    });

    Marca.associate = (models) => {
        Marca.hasMany(models.Modelo, {
            as: "modelos",
            foreignKey: "id"
        })
    }

    return Marca;
}