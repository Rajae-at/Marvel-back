const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    let limit = 100;
    let filters = "";

    if (req.query.limit) {
      limit = req.query.limit;
      filters += `&limit=${limit}`;
    }
    if (req.query.title) {
      filters += `&title=${req.query.title}`;
    }
    if (req.query.page) {
      const skip = (req.query.page - 1) * limit;
      filters += `&skip=${skip}`;
    }
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}${filters}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des comics :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
