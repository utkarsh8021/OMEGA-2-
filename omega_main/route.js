const express = require('express');
const mongoose = require('mongoose');
const {mongourl} = require('./config/keys')
const Wish = require("./models/wish");
const assert = require('assert');
var QRCode = require('qrcode')
var qr = require('qr-image');
// var randomstring = require("randomstring");
var randomnumber = require("randomnumber");

mongoose.connect(mongourl,{useNewUrlParser:true});
const app = express();

//  var data = ["Invalid email or phone"];
//  var base = [];
var phoneno = /^\d{10}$/

var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
const svg_string = require('./views/QR/QR copy.js') ;
// console.log(svg_string);
module.exports = (app)=>{

    app.get("/sent",function(req,res){

        //     QRCode.toDataURL( "http://www.google.com", function (err, url) {
        //         res.send(url);
        
        //     QRCode.toString("i am a pony",{type:'terminal'}, function (err, url) {
        //   console.log(url)
        // })
          
        // })

        // var qr_svg = qr.image(randomnumber.generate(6), { type: 'png' });
        // qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
         
        // var svg_string = qr.imageSync(randomnumber.generate(6),{ type: 'png', ec_level: 'H', size: 10, margin: 0 });
        // console.log(randomnumber.generate(6));

        
        });
        app.get('/',(req,res)=>
        {
            res.render('index')     
        })
       app.post('/',(req,res)=>
       {
            if(req.body.item2.match(phoneno) && req.body.item1.match(email))
            {
                Wish.findOne({Email:req.body.item1}).then(base=>{
                // console.log(base);
                if(base)
                {
                    res.render('index2')
                } 
                else{
                        const Item = new Wish({
                        Email:req.body.item1,
                        Name:req.body.item,
                        ContactNumber:req.body.item2,
                        College:req.body.item3,
                         Qr:randomnumber.generate(6)
                        });
                        res.render('new')
                        Item.save().then(data=>{
                            console.log("saved")
                        })
                }  
            })
        }
        else
        {      
             res.render("index1")
        }
        
       });   
    
}