const owner = require("../controllers/owners.controllers")

module.exports =(app) =>{
    app.post("/api/owner/:airRoger_id", owner.createNewOnwer)
    app.get("/api/owners", owner.getAllOwners)
    app.get("/api/owner/:airRoger_id", owner.getOwnersByPlaneId)
}