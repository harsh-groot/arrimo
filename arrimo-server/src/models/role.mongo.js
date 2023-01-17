const mongoose = require("mongoose");


const roleSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const Role = mongoose.model("role",roleSchema);  

module.exports = Role;