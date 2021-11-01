module.exports = (sequelize, DataTypes) => {
    const Centro = sequelize.define("Centro",{
        nome:  DataTypes.STRING(75),
        endereco: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'centros',
        timestamps: true,
        paranoid: true
    });

    Centro.associate = (models) => {
        Centro.belongsToMany(models.Veiculo, { as: "veiculo", foreignKey: "id" });
    }  

    return Centro;
}