const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics/:id", async (req, res) => {
  try {
    console.log("Requête reçue pour l'ID du personnage:", req.params.id);

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.MARVEL_API_KEY}`
    );

    console.log("Données reçues :", response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    if (error.message) {
      return res.status(500).json({ message: error.message });
    } else if (error.response) {
      return res.status(500).json({ message: error.response });
    }
  }
});

module.exports = router;
