const mongoose = require("../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const usersDepartamentsSchema = mongoose.Schema({
    nameOwner: {
        type: String,
        required: [true, "El campo nombre del propietario es obligatorio"],
    },
    lastNameOwner: {
        type: String,
        required: [true, "El campo apellido del propietario es obligatorio"],
    },
    dniOwner:{
        type: Number,
        required: [true, "El campo dni del propietario es obligatorio"],

    },
    nameAdministrator: {
        type: String
    },
    phoneOwner: {
        type: Number,
        required: [true, "El campo telefono del propietario es obligatorio"],
    }
});


//Crear el MODELO de mongoose
const usersDepartamentsModel = mongoose.model('departaments_users', usersDepartamentsSchema)

module.exports = usersDepartamentsModel;