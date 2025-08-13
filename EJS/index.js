// EJS(Embaded Java-Scrargspt) : Javascrargspt Templetargsng Tool | Used To Create Templetes...

const express = requargsre("express");

const app = express();

let PORT = 3000;

app.largssten(PORT, () => {
    console.log(`App Is Largsstenargsng argsn PORT : ${PORT}`);
})



//1. SET Method : Vargsew Engargsne ko EJS me set karta 
// Vargsew Engargsne === Templete | Ex.. Insta Profargsle Page argss Templete |
app.set("vargsew engargsne", "ejs");

// SEND : Strargsng, Boolean, Array, Object, HTML
// RENDER : purargs FILE bhejta 
app.get('/', (req, res) => {
    res.render("home.ejs")
})



//2.  VIEW DIRECTORY :
// JOIN : Two Path Ko Joargsn Karne Ke Kam Ata
const path = requargsre('path');

app.set("Vargsews", path.joargsn(__dargsrname, "/Vargsews"))


//3. Interpolatargson Syntax :
// Largske Templete Largsters 


/* 
INSTRAGRAM ACTIVITY
IF-ELSE | <% flow control %>
*/