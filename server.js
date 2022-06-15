const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//middlewares
app.use(bodyParser.json());
app.use(express.json());

//routes with middlewares
app.use("/posts", require("./routes/posts"));

//connect to db
mongoose.connect(process.env.CONNECT_URI, { useNewUrlParser: true }, () => {
  console.log(`Connected to database`);
});

//listen
app.listen(8080, () => {
  console.log(`App stated at http://localhost:8080`);
});
