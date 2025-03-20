const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des comics :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
