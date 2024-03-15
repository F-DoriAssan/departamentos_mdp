const mongoose = require("../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const departamentsSchema = mongoose.Schema({
    nameDepartaments: {
        type: String,
        required: [true, "El campo es obligatorio"],
    },
    dniOwner:{
        type: Number,
        required: true,

    },
    nameAdministrator: String,
    phoneOwner: {
        type: Number,
        required: [true, "El campo es obligatorio"],
    },
    departamentType: {
        type: String,
    },
    departamentTypeUnit: {
        type: String,
        enum: ["Monoambiente", "Chalet","Dos ambientes","Tres ambientes"],
    },
    departamentTypeCapacity: {
        type: Number,
        required: [true, "El campo es obligatorio"],
        min: 0,

    },
    departamentTypeBedrooms: {
        type: Number,
        required: [true, "El campo es obligatorio"],
        min: 0,

    },
    departamentTypeBathrooms: {
        type: Number,
        required: [true, "El campo es obligatorio"],
        min: 0,

    },
    price: {
        type: Number,
        min: 0,
        get: function (value) { //Mostar modificado
          return value * 1.21;
    }    
    // get: function (value) {  //Guardar modificado
    //     return value * 1.21;
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
      },
    departaments_category: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
      },
});

//Schema para modificar datos
departamentsSchema.virtual("price_currency").get(function () {
    return `$ ${this.price}`;
});
  

//Crear el MODELO de mongoose
const departamentsModel = mongoose.model('departaments', departamentsSchema)

module.exports = departamentsModel;