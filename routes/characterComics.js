const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/character/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters/${req.params.id}/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );

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
