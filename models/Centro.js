module.exports = (sequelize, DataTypes) => {
    const Centro = sequelize.define("Centro",{
        nome:  DataTypes.STRING(75),
        endereco_id: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'centros',
        timestamps: true,
        paranoid: true
    });

    Centro.associate = (models) => {
        Centro.belongsTo(models.Endereco,{
            as: "endereco",
            foreignKey: "endereco_id"
        })
    }

    return Centro;
}