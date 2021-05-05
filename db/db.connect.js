const mongoose = require('mongoose');

const initializeConnectionDb = async() =>{
    await mongoose.connect(process.env.URL, {newURL: true, uniTop: true})
    console.log("db connected"); 
}

module.exports = initializeConnectionDb;
