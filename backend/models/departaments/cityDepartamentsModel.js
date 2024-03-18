const mongoose = require("../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const cityDepartamentsSchema = mongoose.Schema({
    address: {
        type: String,
        required: [true, "El campo direccion es obligatorio"],
    },
    city: {
        type: String,
        required: [true, "El campo ciudad es obligatorio"],
    },
    country:{
        type: String,
        required: [true, "El campo dpais es obligatorio"],

    }
});


//Crear el MODELO de mongoose
const cityDepartamentsModel = mongoose.model('departaments_cities', cityDepartamentsSchema)

module.exports = cityDepartamentsModel;