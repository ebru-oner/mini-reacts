import express from "express";
import WebSocket, { WebSocketServer } from "ws";

const app = express();

const wss = new WebSocketServer({ port: 5001 });

wss.on("connection", (ws) => {
  console.info("New client connected");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    console.info("Client disconnected");
  });
});

app.listen("5000", () => {
  console.info("Server listening on localhost:5000");
});
