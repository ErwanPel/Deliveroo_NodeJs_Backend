require("dotenv").config();
const express = require("express");
const cors = require("cors");
const data = require("./src/data/data.json");

const app = express();
app.use(express.json()).use(cors());

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.all("*", (req, res) => {
  try {
    res.status(404).json({ message: "Page not Found !" });
  } catch (error) {
    res.status(500).json({
      message:
        "The application doesn't avaible for this moment, please retry later",
    });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server has started 🚀");
});
