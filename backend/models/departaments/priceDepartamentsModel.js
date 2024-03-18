const mongoose = require("../../config/mongodb");

const priceDepartamentsSchema = new mongoose.Schema({
    days: {
        type: Number,
        min: 0,
        required: [true, "El campo dias es obligatorio"]
    },
    price: {
    type: Number,
    min: 0,
    required: [true, "El campo precio es obligatorio"],
    get: function (value) { //Mostar modificado
      return value * 1.21;
}    
// get: function (value) {  //Guardar modificado
//     return value * 1.21;
}
});
//Schema para modificar datos
priceDepartamentsSchema.virtual("price_currency").get(function () {
    return `$ ${this.price}`;
});
  
module.exports = mongoose.model("departaments_prices", priceDepartamentsSchema);