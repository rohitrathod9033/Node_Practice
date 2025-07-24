// EJS(Embaded Java-Script) : Javascript Templeting Tool | Used To Create Templetes...

const express = require("express");

const app = express();

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`App Is Listening in PORT : ${PORT}`);
})



//1. SET Method : View Engine ko EJS me set karta 
// View Engine === Templete | Ex.. Insta Profile Page is Templete |
app.set("view engine", "ejs");

// SEND : String, Boolean, Array, Object, HTML
// RENDER : puri FILE bhejta 
app.get('/', (req, res) => {
    res.render("home.ejs")
})



//2.  VIEW DIRECTORY :
// JOIN : Two Path Ko Join Karne Ke Kam Ata
const path = require('path');

app.set("Views", path.join(__dirname, "/Views"))


//3. Interpolation Syntax :
// Like Templete Liters 


/* 
INSTRAGRAM ACTIVITY
IF-ELSE | <% flow control %>
*/