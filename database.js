const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/usercrudApp").then(() =>{
    console.log("Connection Sucessfull");
}).catch((e) =>{
    console.log(e);
})

const Schema = new mongoose.Schema({
    name : String,
    email : String,
    pasword : String
})

const Usermodel = mongoose.model("User", Schema);

module.exports = Usermodel;
