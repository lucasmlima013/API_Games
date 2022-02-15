const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
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


app.get("/games",(req, res) => {
    res.statusCode =  200;
    res.json(DB.games);
});

app.get("/games/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.send("Isso não é um número");
    }else{
             res.send("Isso é um número");
        }

});

app.listen(4080,() => {
    console.log("Api Rodando!");
});
