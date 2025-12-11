"use strict";
const socketIO = require("socket.io");

io.on("connection", (socket) => {
  userCount++;
  console.log(
    `Client connected. Total users: ${userCount}, Socket ID: ${socket.id}`
  );
