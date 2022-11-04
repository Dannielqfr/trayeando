const { json } = require("express")
const express = require("express")

const app = express()

app.route("/",(req,req)=>{
    res.send({user:"Elvis"})
})

app.listen(2525)
console.log("2525")