"use strict";

const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, "index.html");

const server = express()
  .use((req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

let userCount = 0;
let playerObjects = []; 

io.on("connection", (socket) => {
  userCount++;
  console.log(
    `Client connected. Total users: ${userCount}, Socket ID: ${socket.id}`
  );
