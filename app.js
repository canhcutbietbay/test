const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("<h1>PMT ngu vcl</h1>")
})

app.listen(3000, function(){
    console.log("Listen on port 3000")
})