const express = require("express");
const app = express();
const bodyParser = require*("body-parser");

app.use(bodyParser.urlencodes({extended: false}));
app.use(bodyParser.json());

var DB = {
    games: [
        {
            id : 23,
            title: "Call Of Duty",
            year: 2019,
            price: 60
        },
        {
            id : 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 80
        },
        {
            id : 2,
            title: "Minecraft",
            year: 2015,
            price: 50
        }
        
    ]
}