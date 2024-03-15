const usersModel = require("../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const getAll = async function (req, res, next) {
    try {
        const documentGetAll = await usersModel.find()
        /** query paramiters */
        res.status(200).json(documentGetAll);
    } catch (e) {
        console.log("GETALL users ERRORS", e)
        next(e);


    }

}

const getById = async function (req, res, next) {
    try {
        const documentById = await usersModel.findById(req.params.id)
        /** query paramiters */
        res.status(200).json(documentById);
    } catch (e) {
        console.log("GETById DEPARTAMENTS ERRORS", e)

    }

}

const create = async function (req, res, next) {
    try {
        console.log(req.body)
        const users = new usersModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })
        const document = await users.save()
        res.status(201).json(document);
    } catch (e) {
        console.log("CREATE users ERRORS", e)
        res.status(400).json({ message: e.message });

    }

    //GUARDAR DATOS
}

const login = async function (req, res, next) {
    try {
        console.log(req.body)
        const user = await usersModel.findOne({
            email: req?.body?.email
            // password: req?.body?.password,
        });
        if (!user) {
            return res.status(401).json({ 
                message: "El email y/o contraseña no se encuentran registrados" 
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({ 
                message: "El email y/o contraseña no se encuentran registrados" 
            })
        }
        //GENERAR EL TOKEN
        const token = jwt.sign({userId: user._id},
        req.app.get("secretKey"),
        {expiresIn:"1h"});

        res.status(200).json(token);
    } catch (e) {
        console.log("LOGIN users ERRORS", e)
        res.status(400).json({ message: e.message });

    }
    //LOGIN
}

const update = async function (req, res, next) {
    try {
        await usersModel.updateOne({ _id: req.params.id }, req.body)
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("UPDATE ERROR users", e)
        next(e);

    }


}

const remove = async function (req, res, next) {
    try {
        await usersModel.deleteOne({ _id: req.params.id })
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("ERROR usersModel DELETE")
        next(e);

    }


}

module.exports = {
    getAll,
    getById,
    create,
    login,
    update,
    remove

};