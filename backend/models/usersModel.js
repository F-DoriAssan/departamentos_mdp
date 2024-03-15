const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt")

//Crear departaments SCHEMA - OBJETO
const usersSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "El campo Nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El campo Email es obligatorio"],
    },
    password:{
        type: String,
        required: [true, "El campo Password es obligatorio"],
        validate:{
            validator: function (value) {
                const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
                return regex.test(value);
              },
              message:
                "El password debe contener al menos 6 caracteres, 1 minuscula y 1 mayuscula",
            },      
        },
    });

//Encriptar contraseña
usersSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

//Crear el MODELO de mongoose
const usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;