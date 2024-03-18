const mongoose = require("../../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const usersEstateSchema = mongoose.Schema({
    nameEstate: {
        type: String,
        required: [true, "El campo nombre del propietario es obligatorio"],
    },
    cuil:{
        type: Number,
        required: [true, "El campo dni del propietario es obligatorio"],

    },
    nameBusiness: {
        type: String
    },
    phoneEstate: {
        type: Number,
        required: [true, "El campo telefono del propietario es obligatorio"],
    }
});


//Crear el MODELO de mongoose
const usersEstateModel = mongoose.model('departaments_users_estate', usersEstateSchema)

module.exports = usersEstateModel;