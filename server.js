const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname));

io.on("connection", socket => {

  socket.on("join-room", room => {
    socket.join(room);

    socket.to(room).emit("user-joined", socket.id);

    socket.on("signal", data => {
      socket.to(room).emit("signal", data);
    });

    socket.on("chat", msg => {
      io.to(room).emit("chat", msg);
    });

    socket.on("disconnect", () => {
      socket.to(room).emit("user-left", socket.id);
    });

  });

});

server.listen(3000, () => console.log("Server running"));
