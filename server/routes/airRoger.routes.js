const sqlController = require("../controllers/airRoger.controller")


module.exports = (app) =>{
    app.get("/api/airRogers", sqlController.getSql)
    app.post("/api/airRoger", sqlController.createSql)
    app.get("/api/airRoger/:id", sqlController.getSqlById)
    app.put("/api/airRoger/:id", sqlController.updateSql)
    app.delete("/api/airRoger/:id", sqlController.deleteSql)
}