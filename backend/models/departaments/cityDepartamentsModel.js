const mongoose = require("../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const cityDepartamentsSchema = mongoose.Schema({
    address: {
        type: String,
        required: [true, "El campo nombre del propietario es obligatorio"],
    },
    city: {
        type: String,
        required: [true, "El campo apellido del propietario es obligatorio"],
    },
    country:{
        type: String,
        required: [true, "El campo dni del propietario es obligatorio"],

    }
});


//Crear el MODELO de mongoose
const cityDepartamentsModel = mongoose.model('departaments_city', cityDepartamentsSchema)

module.exports = cityDepartamentsModel;