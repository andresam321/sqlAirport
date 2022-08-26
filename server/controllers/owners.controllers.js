const Owner = require("../models/owners.model")

module.exports ={
// createNewOnwer:(req,res)=>{
//     Owner.create(req.body), req.body.airRoger_id =req.params.airRoger_id
//     .then((createOwner)=>{res.status(201).json(createOwner)})
//     .catch((err)=>{console.log("error in creating owner", err)
//     res.status(400).json({message:"Something went wrong in creating owner"})

// })

    
// },


createNewOnwer: async(req,res)=>{
    req.body.airRoger_id =req.params.airRoger_id
    try{
        const newOwner= await Owner.create(req.body)
        res.json(newOwner);

    } catch(error){
        res.status(400).json(error)
    }


},
 getAllOwners: async (req,res)=>{
    try{
        const allOwners = await Owner.find({}).populate("airRoger_id").exec();
        console.log(allOwners)
        res.json(allOwners)
    } catch (err){
        console.log("error")
        res.status(400).json(err)
    }
}
,

getOwnersByPlaneId: async(req,res)=>{
    try{
        const ownersByPlaneId = await Owner.findOne({airRoger_id:req.params.id})
        console.log(ownersByPlaneId)
        res.json(ownersByPlaneId)

    } catch(err){
        console.log("error")
        res.status(400).json(err)
    }
}



}