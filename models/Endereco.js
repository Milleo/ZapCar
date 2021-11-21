module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define("Endereco", {
        logradouro:  DataTypes.STRING(100),
        numero: DataTypes.STRING(10),
        complemento: DataTypes.STRING(100),
        bairro: DataTypes.INTEGER.UNSIGNED,
        cidade: DataTypes.INTEGER.UNSIGNED,
        estado: DataTypes.STRING(2),
        cep: DataTypes.INTEGER.UNSIGNED,
        longitude: DataTypes.GEOMETRY('POINT'),
        latitude: DataTypes.GEOMETRY('POINT'),       
    }, {
        tableName: 'enderecos',
        timestamps: true,
        paranoid: true
    });

    Endereco.associate = (models) => {
        Endereco.hasOne(models.Centro, { foreignKey: "id" });
    }

    return Endereco;
}