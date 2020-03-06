var express=require("express");
var app=express();
var bodyParser=require("body-parser")
var exphbs=require("express-handlebars");
var request= require("request");
var nodemailer= require("nodemailer");
var randomnumber = require("randomnumber");
// var qr_svg= require("./BACKEND/QR/QR.js");
// console.log(qr_svg);

//view engine setup
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('../QR/QR copy')(app);
   
unique = randomnumber.generate(6);
    // app.post("/send",function(req,res){
    //     console.log(req.body);
    // })
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mishra8021@gmail.com',
          pass: '1984utkmishra01'
        }
      });
      
      
      var mailOptions = {
        from: 'mishra8021@gmail.com',
        to: 'samanayesha718@gmail.com',
        subject: "Open with smile",
        html:'<P>dfuoshauihf</P>',
        attachments: [
          {
            filename: unique,
            path: 'C:/Users/KIIT/Downloads/' + unique,
            // cid: 'uniq-qrcode'
          }
        ]
      };
        
        // html: 'Embedded image: <img src="hyhyhyhyhy"/>',
        //     attachments: [{
        //     filename: '542446.jpg',
        //     path: 'C:/Users/KIIT/Pictures',
        //     cid: 'hyhyhyhyhy' //same cid value as in the html img src
        //   }];
      
     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("this is error")
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });



