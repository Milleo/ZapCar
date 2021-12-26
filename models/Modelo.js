module.exports = (sequelize, DataTypes) => {
    const Modelo = sequelize.define('Modelo', {
        nome: DataTypes.STRING(75),
        marca_id: DataTypes.INTEGER.UNSIGNED 
    },{
        tableName: 'modelos',
        timestamps: true,
        paranoid: true,
        hasTrigger: false
    })

    Modelo.associate = (models) => {
        Modelo.belongsTo(models.Marca, { as: "marca", foreignKey: "marca_id" });
    };

    return Modelo;
}