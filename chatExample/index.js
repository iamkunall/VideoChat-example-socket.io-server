import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const __dirname = path.resolve();

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on("connection", (socket) => {
  console.log("a user connected");

  // When user disconnects
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  //
  socket.on("chat message", (msg) => {
    // console.log(`message: ${msg}`);
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
