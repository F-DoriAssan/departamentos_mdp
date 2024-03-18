const usersDepartamentsModel = require("../../models/departaments/usersDepartamentsModel")

const getAll = async function (req, res, next) {
    try {
        const documentGetAll = await usersDepartamentsModel.find()
        .populate("departaments_users")//populate relacion de bases
        //.sort({nameDepartaments: 1, price: -1}) //sort para ordenar los datos
        //.select("nameDepartaments, price") //seleccionar lo que queremos mostrar
    /** query paramiters */
    res.status(200).json(documentGetAll);
    } catch (e) {
        console.log("GETALL users DEPARTAMENTS  ERRORS",e)
        next(e);


    }

}

const getById = async function (req, res, next) {
    try {
        const documentById = await usersDepartamentsModel.findById(req.params.id)
    /** query paramiters */
    res.status(200).json(documentById);
    } catch (e) {
        console.log("GETById users DEPARTAMENTS ERRORS",e)

    }

}

const create = async function (req, res, next) {
    try {
        console.log(req.body)
        const usersDepartaments = new usersDepartamentsModel({
            nameOwner: req.body.nameOwner,
            lastNameOwner: req.body.lastNameOwner,
            dniOwner: req.body.dniOwner,
            nameAdministrator: req.body.nameAdministrator,
            phoneOwner: req.body.phoneOwner,
        })
        const document = await  usersDepartaments.save()
        res.status(201).json(document);
    } catch (e) {
        console.log("CREATE users DEPARTAMENTS ERRORS",e)
       res.status(400).json({message: e.message}); 

    }

    //GUARDAR DATOS


}

const update = async function (req, res, next) {
    try {
        await usersDepartamentsModel.updateOne({_id:req.params.id},req.body)
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("UPDATE ERROR users DEPARTAMENTS", e)
        next(e);

    }


}

const remove = async function (req, res, next) {
    try {
        await usersDepartamentsModel.deleteOne({_id:req.params.id})
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("ERROR users DEPARTAMENTS DELETE")
        next(e);

    }


}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove

};