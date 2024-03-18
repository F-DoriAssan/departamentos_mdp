const cityDepartamentsModel = require("../../models/departaments/cityDepartamentsModel")

const getAll = async function (req, res, next) {
    try {
        const documentGetAll = await cityDepartamentsModel.find()
        .populate("departaments_price")//populate relacion de bases
        //.sort({nameDepartaments: 1, price: -1}) //sort para ordenar los datos
        //.select("nameDepartaments, price") //seleccionar lo que queremos mostrar
    /** query paramiters */
    res.status(200).json(documentGetAll);
    } catch (e) {
        console.log("GETALL city DEPARTAMENTS  ERRORS",e)
        next(e);


    }

}

const getById = async function (req, res, next) {
    try {
        const documentById = await cityDepartamentsModel.findById(req.params.id)
    /** query paramiters */
    res.status(200).json(documentById);
    } catch (e) {
        console.log("GETById city DEPARTAMENTS ERRORS",e)

    }

}

const create = async function (req, res, next) {
    try {
        console.log(req.body)
        const cityDepartaments = new cityDepartamentsModel({
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
        })
        const document = await  cityDepartaments.save()
        res.status(201).json(document);
    } catch (e) {
        console.log("CREATE city DEPARTAMENTS ERRORS",e)
       res.status(400).json({message: e.message}); 

    }

    //GUARDAR DATOS


}

const update = async function (req, res, next) {
    try {
        await cityDepartamentsModel.updateOne({_id:req.params.id},req.body)
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("UPDATE ERROR city DEPARTAMENTS", e)
        next(e);

    }


}

const remove = async function (req, res, next) {
    try {
        await cityDepartamentsModel.deleteOne({_id:req.params.id})
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("ERROR city DEPARTAMENTS DELETE")
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