const { json } = require("express")
const express = require("express")
const { connection } = require("./mongodb")

const app = express()

connection()

app.get("/",(req,res)=>{
    res.send({user:"Elvis"})
})

app.listen(2525)
console.log("2525")