var express = require("express");
var app = express();
const cors = require("cors");

const routes = require("./Routes/routes");

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use("/api", routes);

app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
