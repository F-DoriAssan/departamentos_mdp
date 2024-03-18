const departamentsModel = require("../../models/departaments/departamentsModel")

const getAll = async function (req, res, next) {
    try {
        const documentGetAll = await departamentsModel.find()
        .populate("departaments_category")//populate relacion de bases
        //.sort({nameDepartaments: 1, price: -1}) //sort para ordenar los datos
        //.select("nameDepartaments, price") //seleccionar lo que queremos mostrar
    /** query paramiters */
    res.status(200).json(documentGetAll);
    } catch (e) {
        console.log("GETALL DEPARTAMENTS ERRORS",e)
        next(e);


    }

}

const getById = async function (req, res, next) {
    try {
        const documentById = await departamentsModel.findById(req.params.id)
    /** query paramiters */
    res.status(200).json(documentById);
    } catch (e) {
        console.log("GETById DEPARTAMENTS ERRORS",e)

    }

}

const create = async function (req, res, next) {
    try {
        console.log(req.body)
        const departaments = new departamentsModel({
            departaments_users: req.body.departaments_users, //Relacion de bases con categorias
            departaments_category: req.body.departaments_category, //Relacion de bases con categorias
            departaments_city: req.body.departaments_city, //Relacion de bases con categorias
            departaments_price: req.body.departaments_price, //Relacion de bases con categorias
    
        })
        const document = await  departaments.save()
        res.status(201).json(document);
    } catch (e) {
        console.log("CREATE DEPARTAMENTS ERRORS",e)
       res.status(400).json({message: e.message}); 

    }

    //GUARDAR DATOS


}

const update = async function (req, res, next) {
    try {
        await departamentsModel.updateOne({_id:req.params.id},req.body)
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("UPDATE ERROR DEPARTAMENTS", e)
        next(e);

    }


}

const remove = async function (req, res, next) {
    try {
        await departamentsModel.deleteOne({_id:req.params.id})
        console.log(req.params.id);
        res.status(204);
    } catch (e) {
        console.log("ERROR DEPARTAMENTS DELETE")
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