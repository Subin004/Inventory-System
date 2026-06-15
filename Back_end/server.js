const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: '.env'});
const sequelize = require("./config/db");
console.log("DB_PASSWORD =", process.env.DB_PASSWORD);

const app = express();

app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err);
  });

app.get("/", (req, res) => {
    res.send("Inventory Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});