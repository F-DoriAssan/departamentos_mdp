const mongoose = require("../../config/mongodb");

//Crear departaments SCHEMA - OBJETO
const departamentsSchema = mongoose.Schema({
    departaments_users: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
      },
      departaments_categories: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
      },
      departaments_city: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
      },

    departaments_price: {
        type: mongoose.Schema.ObjectId,
        ref: "departaments_categories",
      },
      status: {
        type: String,
        enum: ["active", "inactive"],
      },
});



//Crear el MODELO de mongoose
const departamentsModel = mongoose.model('departaments', departamentsSchema)

module.exports = departamentsModel;