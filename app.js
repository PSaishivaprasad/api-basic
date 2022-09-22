const express = require("express");
const cors = require("cors");
const app = express();
const route = require("./lib/routes/route");

app.use(cors());
// const api = require("./lib/apis/apis");
// app.use(require("./lib/routes/route"));
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.use(require("./lib/apis/apis"));

route(app);
module.exports = app;
