const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/departamentos_mar_del_plata`) 
  .then(() => {
    console.log("Conectado");
  })
  .catch((error) => console.log(error));

module.exports = mongoose;