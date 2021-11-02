module.exports = (sequelize, DataTypes) => {
    const Veiculo = sequelize.define("Veiculo", {
        ano: DataTypes.STRING(4),
        cor: DataTypes.STRING(20),
        placa: DataTypes.STRING(7),
        longitude: DataTypes.GEOMETRY('POINT'),
        latitude: DataTypes.GEOMETRY('POINT'),
        imagem: DataTypes.STRING,
        modelo: DataTypes.INTEGER.UNSIGNED,
        centro: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'veiculos',
        timestamps: true,
        paranoid: true
    });

    Veiculo.associate = (models) => {
        Veiculo.hasOne(models.Modelo, { as: "modeloObj", foreignKey: "id" });
        Veiculo.hasOne(models.Centro, { as: "centroObj", foreignKey: "id" });
    }

    return Veiculo;
}