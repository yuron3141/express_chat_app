const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

//画像・CSSの読み込み
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    app.use(express.static('public'));
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    //console.log("ユーザが接続しました");

    socket.on("chat data", (msg) => {
        //console.log(msg);

        io.emit("chat data", msg);
    });
});

server.listen(PORT, () =>{
    console.log("listening on 3000");
});