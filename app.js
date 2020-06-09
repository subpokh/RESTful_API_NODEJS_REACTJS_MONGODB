const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");
//middlewares: these are the functionalities that are added when directed to certain route,
// Example: authentications and other functions for various purposes
//app.use("/greeting", () => {
//  console.log("this is a function from middleware in express");
//});
app.use(bodyParser.json());
//app.use(cors());//this is if you want to extract output in codepen or third party domain

//import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//route
app.get("/", (req, res) => {
  res.send("we are in home");
});

//CONNECT TO DB
mongoose.connect(
  "<MONGOdb connection string>",
  { useNewUrlParser: true },
  () => {
    console.log("connected to database");
  }
);

//how do we start listening to server
app.listen(3000);
