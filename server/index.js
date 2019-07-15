const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
const CORS = require("cors");
const compression = require("compression");

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser());
app.use(compression());

app.use(CORS());

app.use(express.static("./client/public"));

app.get("/products:id", (req, res) => {
  let totalInfo = {};
  db.getProductImages(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      console.log("success image get");
      totalInfo.images = results.rows;
      db.getProductInfo(req.params.id, (err, results) => {
        if (err) {
          console.log("err");
          res.send();
        } else {
          console.log("success product get");
          totalInfo.product = results.rows[0];
          res.send(totalInfo);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
