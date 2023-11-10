// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the cors module
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS for all routes

app.use("/api/cloudinary", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.cloudinary.com/v1_1/dzjmllowu/resources/search",
      {
        headers: {
          Authorization: req.headers.authorization,
        },
        params: req.query,
      }
    );

    // Set CORS headers in the response
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
