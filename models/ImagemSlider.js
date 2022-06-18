module.exports = (sequelize, DataTypes) => {
    const ImagemSlider = sequelize.define("ImagemSlider",{
        titulo:  DataTypes.STRING(150),
        texto:  DataTypes.TEXT,
        imagem:  DataTypes.STRING(200)
    }, {
        tableName: 'imagens_slider',
        timestamps: true,
        paranoid: true
    });

    return ImagemSlider;
}