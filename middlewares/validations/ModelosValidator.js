const { checkSchema } = require("express-validator");

const ModelosValidator = checkSchema({
    nome: { required: true, isLength: { options: { min: 2 } }, errorMessage: "O nome do modelo é obrigatório" },
    marca_id: { required: true, isInt: true, errorMessage: "A marca do veículo é obrigatória" }
});

module.exports = ModelosValidator;