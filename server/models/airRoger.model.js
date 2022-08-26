const mongoose = require("mongoose")


const AirRoger =  new mongoose.Schema(
    {
        // AirRoger:[
        //     AirRoger
            
           
        // ],
        area:{
            type:String,
            // required:[true,"An area is required!"],
            enum:[
                "Air Roger",
                "Wing and a Prayer",
                "North Tower",
                "10-11 Hangars",
                "Hiller Aviation",
                "Jato Aviation",
                "Bay Ramp",
                "3-9 Hangars",
                "1-2 Hangars",
                "13-15 Hangars",
                "South Tower",
                "Sva Hangar",
                "Skyway Holding Parking",
                "NorthWest Overrun",
                "Executive Ramp",
                "T Shades",
                "8-9 Hangars",
                "Transient Parking"
            ]

        },
  

        
            locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            area:{
                type:String,
                // required:[true,"An area is required!"],
                enum:[
                    "Air Roger",
                    "Wing and a Prayer",
                    "North Tower",
                    "10-11 Hangars",
                    "Hiller Aviation",
                    "Jato Aviation",
                    "Bay Ramp",
                    "3-9 Hangars",
                    "1-2 Hangars",
                    "13-15 Hangars",
                    "South Tower",
                    "Sva Hangar",
                    "Skyway Holding Parking",
                    "NorthWest Overrun",
                    "Executive Ramp",
                    "T Shades",
                    "8-9 Hangars",
                    "Transient Parking"
                ]
    
            },
      
            tailNumber:{
                type:String,
    
            },
     
            airplaneType:{
                type:String,
    
            },
       
            fuelType:{
                type:String,
                // required:[true,"Must choose a type of fuel, Options:Avgas 100LL","Jet-A","94 unleaded "],
                enum:["Avgas 100LL","Jet-A","94 unleaded",]
    
            },
        
            fuelOrder:{
                type:String,
    
            },
       
            positivePrist:{
                type:String,
                enum:["Positive", "Negative", "NA"]
    
            },
        
            checkName:{
                type:String,
    
            },
            boxArt:{
                type:String
            },
            // owners:{
            // owners:[owners]
            // }    
            
            
           
                
            
     
       
            
        
    }, {timestamps:true}
)





const airRoger  = mongoose.model("AirRoger", AirRoger)
module.exports = airRoger