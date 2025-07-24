// Express Haii wo Function haii Variable nahi,
// jise ham app variable me store karwaiyenge &&
// wo Object Return karta Haiii... 
const express = require("express");

const app = express();

// 1. Select One Port.. 3000
let PORT = 3000;

// Listen Method : server create karta jo incoming API request ko sunta haiii....
app.listen(PORT, () => {
    console.log(`App Is Listening in PORT : ${PORT}`);
})

// USE Method : request bhejta haii or TERMINAL pe print karwata
app.use((req, res) => {
    console.log("Request Recieved Successfully....");
    res.send("HTTP Response : ");
    res.send({   // Object  ko  JSON Representation me convert karta haii....
        Fruit : "Mango",
        Color : "Yellow",
    });
})


// 2..NOW Request PARSING---->
// HTTP req text me hoti -> express use ""req object"" me convert kar deti
// req.send() : send HTTP Response...

// ROUTING ......
// .use && .get nearly simmilar 
app.get('/', (req, res) => {
    res.send("This Is Default Route");
})
app.get('/mango', (req, res) => {
    res.send("This Is Default Mango");
})
app.get('/orange', (req, res) => {
    res.send("This Is Default Orange");
})
app.get('/apple', (req, res) => {
    res.send("This Is Default Apple");
})
app.get('/banana', (req, res) => {
    res.send("This Is Default Banana");
})



// NODEMON : Automatically Restart Server When Code Change...

// PATH PARAMETER  :  EX == Instragram Username -- | /bad jo aye use variable trat karna..
app.get('/:username', (req, res) => {
    let user = console.log(req.params);
    res.send(user);
})

// QUERY STRING : URL ke andar      ?q = string
app.get('/search', (req, res) => {
    let user = console.log(req.query);
    let users = req.query;
    res.send(user);
    res.send(users);
})



