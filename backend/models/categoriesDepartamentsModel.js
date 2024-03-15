const mongoose = require("../config/mongodb");

const categoryDepartamentsSchema = new mongoose.Schema({
  nameCategory: String,
});

module.exports = mongoose.model("departaments_categories", categoryDepartamentsSchema);