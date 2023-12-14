const express = require("express");

const db = require("./db");
const cors = require("cors");

const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());
app.get("/api/links", db.getLinks);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
