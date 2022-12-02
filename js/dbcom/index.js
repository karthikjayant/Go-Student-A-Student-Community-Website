let express = require("express")
let path = require("path")
let app = express()

let connectdb = require("./connection/connetdb.js")
connectdb()

app.get("/", (req,res)=>{
    
    res.render("signup.ejs")
})

app.listen(3000,()=>{
    console.log('server is connected.... ')
})


// let saveDoc = require("./model/wbmodel.js")
// saveDoc()
