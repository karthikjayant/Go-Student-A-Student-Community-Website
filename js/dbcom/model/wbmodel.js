const { default: mongoose } = require("mongoose");

let schema = new mongoose.Schema({
    fname:{type:String, require:true},
    uname:{type:String, require:true},
    email:{type:String, require:true},
    number:{type:Number, require:true},
    password:{type:String,require:true},
    cpassword:{type:String,require:true},
})

let user = new mongoose.model("User", schema{
    "fname":"karthik",
    "uname":"Kar",
    "email":"dmvs@gmail.com",
    "number":"94905907",
    "password":"2003",
    "cpassword":"2003"
})

module.exports= user