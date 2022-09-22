const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to World." });
});

router.post("/admin/login", (req, res) => {
  console.log(req);
  res.status(200).send({ name: "shiva" });
});

module.exports = router;
