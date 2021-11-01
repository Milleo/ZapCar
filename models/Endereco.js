module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define("endereco", {
        logradouro:  DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING(2),
        cep: DataTypes.INTEGER.UNSIGNED,
        longitude: DataTypes.GEOMETRY('POINT'),
        latitude: DataTypes.GEOMETRY('POINT'),
        
    }, {
        tableName: 'enderecos',
        timestamps: true,
        paranoid: true
    });

    return Reserva;
}