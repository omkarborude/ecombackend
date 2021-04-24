const mongoose = require("mongoose")

function initializeDBconnection() {
    mongoose.connect("mongodb+srv://osbwifi:omkar@8354@neog-cluster.b9ili.mongodb.net/test", 
    {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("mongodb successfully connected"))
    .catch(error => console.error("mongodb connection failed... ", error))
}

module.exports = { initializeDBconnection }