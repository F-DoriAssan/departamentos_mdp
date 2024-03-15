const categoriesDepartamentsModel = require("../models/categoriesDepartamentsModel")
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
          console.log(req.body.nameCategory)

          const document = new categoriesDepartamentsModel({
            nameCategory:req.body.nameCategory
          })

          const response = await document.save()

          res.json(response)
        }catch(e){
          //e.status=200
          next(e)
        }
        
    },
    
}