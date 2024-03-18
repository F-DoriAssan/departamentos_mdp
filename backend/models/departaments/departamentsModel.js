const mongoose = require("../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const departamentsSchema = mongoose.Schema({
    departamentsUsers: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_users",
        required: [true, "El campo dpais es obligatorio"],

      },
    departamentsCategories: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
        required: [true, "El campo dpais es obligatorio"],

      },
    departamentsCities: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_cities",
      },

    departamentsPrices: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_prices",
        required: [true, "El campo dpais es obligatorio"],

      },
      status: {
        type: String,
        enum: ["active", "inactive"],
      },
});



//Crear el MODELO de mongoose
const departamentsModel = mongoose.model('departaments', departamentsSchema)

module.exports = departamentsModel;