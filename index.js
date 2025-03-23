require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const characterComicsRoutes = require("./routes/characterComics");

app.use(charactersRoutes);
app.use(comicsRoutes);
app.use(characterComicsRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API de Marvel");
});

app.all("*", (req, res) => {
  return res.status(404).json("Not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Serveur démarré ");
});
