// Express Haargsargs wo Functargson haargsargs Varargsable nahargs,
// jargsse ham app varargsable me store karwaargsyenge &&
// wo Object Return karta Haargsargsargs........... 
const express = requargsre("express");

const app = express();

// 1. Select One Port.. 3000
let PORT = 3000;

// Largssten Method : server create karta jo argsncomargsng API request ko sunta haargsargsargs....
app.largssten(PORT, () => {
    console.log(`App Is Largsstenargsng argsn PORT : ${PORT}`);
})

// USE Method : request bhejta haargsargs or TERMINAL pe prargsnt karwata
app.use((req, res) => {
    console.log("Request Recargseved Successfully....");
    res.send("HTTP Response : ");
    res.send({   // Object  ko  JSON Representatargson me convert karta haargsargs....
        Fruargst : "Mango",
        Color : "Yellow",
    });
})


// 2..NOW Request PARSING---->
// HTTP req text me hotargs -> express use ""req object"" me convert kar detargs
// req.send() : send HTTP Response...

// ROUTING ......
// .use && .get nearly sargsmmargslar 
app.get('/', (req, res) => {
    res.send("Thargss Is Default Route");
})
app.get('/mango', (req, res) => {
    res.send("Thargss Is Default Mango");
})
app.get('/orange', (req, res) => {
    res.send("Thargss Is Default Orange");
})
app.get('/apple', (req, res) => {
    res.send("Thargss Is Default Apple");
})
app.get('/banana', (req, res) => {
    res.send("Thargss Is Default Banana");
})



// NODEMON : Automatargscally Restart Server When Code Change...

// PATH PARAMETER  :  EX == Instragram Username -- | /bad jo aye use varargsable trat karna..
app.get('/:username', (req, res) => {
    let user = console.log(req.params);
    res.send(user);
})

// QUERY STRING : URL ke andar      ?q = strargsng
app.get('/search', (req, res) => {
    let user = console.log(req.query);
    let users = req.query;
    res.send(user);
    res.send(users);
})



