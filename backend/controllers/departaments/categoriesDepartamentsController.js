const categoriesDepartamentsModel = require("../../models/departaments/categoriesDepartamentsModel")
module.exports={
    getAll:async function(req, res, next) {
      try{
        const departaments_categories = await categoriesDepartamentsModel.find()
        res.json(departaments_categories)
      }catch(e){
        next(e)
      }
    },
    create:async function(req, res, next) {
        try{
          console.log(req.body)
          console.log(req.body.departamentType)

          const document = new categoriesDepartamentsModel({
            departamentType:req.body.departamentType,
            departamentTypeCapacity: req.body.departamentTypeCapacity,
            departamentTypeBedrooms:req.body.departamentTypeBedrooms,
            departamentTypeBathrooms:req.body.departamentTypeBathrooms,

          })

          const response = await document.save()

          res.json(response)
        }catch(e){
          //e.status=200
          next(e)
        }
        
    },
    
}