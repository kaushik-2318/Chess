const express = require('express')
const socket = require('socket.io')
const http = require('http')
const { Chess } = require('chess.js');
const path = require('path');
const { log } = require('console');

const app = express();

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let player = {};
let currentPlayer = "W";

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req, res)=>{
    res.render("index",{title:"Chess Game"});
})

io.on("connection", function(uniquesocket){
    console.log("connected")

    uniquesocket.on("churan", function(){
        console.log("churan received");

        io.emit("chran paapdi");
    })

    uniquesocket.on("disconnect",()=>{
        console.log("disconnect");
    })
})

server.listen(3000, function(){
    console.log("Listening on port 3000")
})