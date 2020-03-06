const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(express.static('views'))
const port = 2000;
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
require('./route')(app);
require('./views/QR/QR copy')(app);
//app.use(express.static('public'))
app.set('view engine','ejs');

app.get("/index",function(req,res){
    res.render("index");
})

app.get("/events",function(req,res){
    res.render("events");
})
app.listen(port,()=>{
    console.log("Server is listening on"+ port);
})