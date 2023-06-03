const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();
const sha256 = require("sha256");

const username = "Shrey";
const passwordHash = sha256("shreybert");

function verify(_username,password){
    return _username === username && sha256(password) === passwordHash;
}

app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{

    console.log("new user");
    res.send("cum back later");
});

app.put("/verify",(req,res)=>{
    if (!req.body || !req.body.username || !req.body.password){
        res.sendStatus(401);
        return;
    }
    if (verify(req.body.username,req.body.password)){
        res.sendStatus(200);
        return;
    }
    res.sendStatus(401);
})


app.put("/move",(req,res)=>{
    let np = "ON";
    if (req.body && req.body.state && req.body.state.toLowerCase() === "off"){
        np = "OFF"
    }
    console.log(req.body);
    axios("http://192.168.1.99/relay="+np).catch((err)=>{
        console.log(err)
    });
    res.send("working");
});

app.listen(80);