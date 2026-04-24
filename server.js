const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Room page
app.get("/room", (req, res) => {
  res.sendFile(path.join(__dirname, "room.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
