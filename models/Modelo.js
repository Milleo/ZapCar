module.exports = (sequelize, DataTypes) => {
    const Modelo = sequelize.define('Modelo', {
        nome: DataTypes.STRING(75),
        marca: DataTypes.INTEGER.UNSIGNED 
    },{
        tableName: 'modelos',
        timestamps: true,
        paranoid: true,
    })

    Modelo.associate = (models) => {
        Modelo.hasOne(models.Marca, { as: "marcaObj", foreignKey: "id" })
    };

    return Modelo;
}