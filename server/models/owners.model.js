const mongoose = require("mongoose")

const owners = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:[true,"name req"]
        },
        email:{
            type:String
        },
        information:{
            type:String
        },
        airRoger_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AirRoger",
        }
    }, {timestamps:true}
)


const owner = mongoose.model("owner", owners)
module.exports = owner
