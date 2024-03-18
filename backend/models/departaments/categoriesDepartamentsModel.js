const mongoose = require("../../config/mongodb");

const categoriesDepartamentsSchema = new mongoose.Schema({
  departamentType: {
    type: String,
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

}
});

module.exports = mongoose.model("departaments_categories", categoriesDepartamentsSchema);