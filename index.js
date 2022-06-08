const express = require("express");
const app = express()
const cors = require("cors");
const PORT = 8000
const input = require("./js/main.js")

app.use(cors())

    let characters = {
        "chuck bartowski": {
            "name": 'Charles "Chuck" Irving Bartowski',
            "occupation": "Owner Burbank Buy More",
            "parents": "Stephen and Mary Bartowski",
            "actor": "Zachary Levi"
        },
        "sarah walker": {
            "name": "Sarah Lisa Bartowski",
            "occupation": "CIA agent",
            "parents": "Jack Burton",
            "actor": "Yvonne Strahovski"
        },
        "john casey": {
            "name": "John Casey (born Alexander Coburn)",
            "occupation":"NSA agent",
            "parents": "unknown",
            "actor": "Adam Baldwin"
        },
        "diane beckman": {
            "name": "M. Diane Beckman",
            "occupation": "	Director of the NSA",
            "parents": "unknown",
            "actor": "Bonita Friedericy"
        },
        "bryce larkin": {
            "name": "Bryce Larkin",
            "occupation": "CIA agent",
            "parents": "unknown",
            "actor": "Matt Bomer"
        },
        "daniel shaw": {
            "name": "Daniel Shaw",
            "occupation": "Rogue CIA agent",
            "parents": "John Shaw and Mary Shaw",
            "actor": "Brandon Routh"
        },
        "stephen bartowski": {
            "name": "Stephen Joseph Bartowski codename: 'Orion'",
            "occupation": "Independent",
            "parents": "unknown",
            "actor": "Scott Bakula"
        },
        "mary bartowski": {
            "name": "Mary Elizabeth Bartowski codename: 'Frost'",
            "occupation": "	Undercover CIA Agent",
            "parents": "Jesse Gunter and Mary Gunter",
            "actor": "Linda Hamilton"
        },
        "morgan grimes": {
            "name": "Morgan Grimes",
            "occupation": "Buy More Manager",
            "parents": "Bolonia Garcia Boganvia Grimes Tucker",
            "actor": "Joshua Gomez"
        },
        "ellie woodcomb": {
            "name": "Ellie Woodcomb",
            "occupation": "Physician",
            "parents": "Stephen J. Bartowski and Mary Elizabeth Bartowski",
            "actor": "Sarah Lancaster"
        },
        "devon woodcomb": {
            "name": "Devon Woodcomb",
            "occupation": "Cardiologist Cardiothoracic Surgeon",
            "parents": "Dr. 'Woody' Woodcomb and Dr. 'Honey' Woodcomb",
            "actor": "Ryan McPartlin"
        },
        "alexei volkoff": {
            "name": "Alexei Volkoff alias: 'Gregory Tuttle'",
            "occupation": "International arms dealer",
            "parents": "Mother: Mrs. Winterbottom",
            "actor": "Timothy Dalton"
        },
        "jeff barnes":{
            "name": "Jeff Barnes",
            "occupation": "Nerd Herd",
            "parents": "unknown",
            "actor": "Scott Krinsky"
        },
        "lester patel": {
            "name": "Lester Patel",
            "occupation": "Nerd Herd",
            "parents": "unknown",
            "actor": "Vik Sahay"
        },
        "big mike": {
            "name": "Michael 'Big Mike' Tucker",
            "occupation": "Buy Moore Manager",
            "parents": "unknown",
            "actor": "Mark Christopher Lawrence"
        },
        "unknown": {
            "name": "unknown",
            "occupation": "unknown",
            "parents": "unknown",
            "actor": "unknown"
        }
    }

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/", (req, res)=>{
        res.json(characters)
})

app.get("/api/:name", (req, res)=>{
    const name = req.params.name.toLowerCase();

    if(characters[name]){
        res.json(characters[name])
    } else {
        res.json(characters["unknown"])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})