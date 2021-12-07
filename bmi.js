// const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
var path = require('path')

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req, res){
    res.sendFile(__dirname+"/views/bmi.html");
});

// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/about", function(req, res){
//     res.send("<h1>About me</h1><p>nice is nice good is good</p>");
// });

// app.get("/contact", function(req, res){
//     res.send("<h1>Dont ever</h1><p>evil is evil opera is phantom</p>");
// });



app.post("/", function(req, res){
    var n1 = Number(req.body.h);
    var n2 = Number(req.body.w);
    var result = n2/((n1/100)*(n1/100));
    // console.log(req.body.num1);
    res.send("Your BMI is "+ result);
});

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});
 