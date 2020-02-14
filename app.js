const express = require("express");
const app = express();
const morgan = require("morgan");

const quotes = require("./quotes.json");

// Add this to access html files
app.use(express.static(__dirname + "/public"));

// Add this to log events
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/", (request, response) => {
  response.send("Hello world, this is Quotey");
});

app.get("/random", (request, response) => {
  const random = Math.floor(Math.random() * 100);
  response.json(quotes[random]);
});
