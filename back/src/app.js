const  router  = require("./routes/index");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors') 
const app = express();


app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use("/", router);

module.exports = {
    app,
  };