module.exports = (sequelize, DataTypes) => {
    const Veiculo = sequelize.define("Veiculo", {
        ano: DataTypes.STRING(4),
        cor: DataTypes.STRING(20),
        placa: DataTypes.STRING(7),
        localizacao: DataTypes.GEOMETRY('POINT'),
        modelo_id: DataTypes.INTEGER.UNSIGNED,
        centro_id: DataTypes.INTEGER.UNSIGNED
    }, {
        tableName: 'veiculos',
        timestamps: true,
        paranoid: true
    });

    return Veiculo;
}