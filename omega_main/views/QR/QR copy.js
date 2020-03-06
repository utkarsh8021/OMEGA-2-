
var express=require("express");
var app= express();
var QRCode = require('qrcode')
var qr = require('qr-image');
var randomstring = require("randomstring");
module.exports = (app)=>{
    app.get("/",function(req,res){


        var qr_svg = qr.image(randomstring.generate(6), { type: 'png' });
        qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
         
        var svg_string = qr.imageSync(randomstring.generate(6),{ type: 'png', ec_level: 'H', size: 10, margin: 0 });
        console.log(svg_string);
        res.send(svg_string);
        
        });
        
        
}
app.listen(2000,function(){
    console.log("server is litening on 2000");
});


// app.get("/",function(req,res){


// var qr_svg = qr.image(randomstring.generate(6), { type: 'png' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
 
// var svg_string = qr.imageSync(randomstring.generate(6),{ type: 'png', ec_level: 'H', size: 10, margin: 0 });
// console.log(svg_string);
// res.send(svg_string);

// });






 





