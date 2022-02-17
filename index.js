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
        },
        {
            id : 10,
            title: "Fifa",
            year: 2022,
            price: 120
        },
        {
            id : 30,
            title: "Pes 2021",
            year: 2021,
            price: 80
        },
        {
            id : 60,
            title: "Destiny",
            year: 2021,
            price: 200
        }, 
        {
            id : 80,
            title: "Mortal Kombat",
            year: 2019,
            price: 200
        }
        
    ]
}


app.get("/games",(req, res) => {
    res.statusCode =  200;
    res.json(DB.games);
});

app.get("/games/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
            var id = parseInt(req.params.id);

            var game = DB.games.find(g => g.id == id);
            //tratamento
            if(game != undefined){
                res.statusCode =  200;
                res.json(game);
            }else{
                res.sendStatus(404);
            }
        }

});

app.listen(4080,() => {
    console.log("Api Rodando!");
});
