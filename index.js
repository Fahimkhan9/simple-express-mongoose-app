const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const port = 5000;

app.set("view engine", "ejs");

//connect to db
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vigvf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  // res.sendFile(`${__dirname}/views/index.html`);
  // console.log(req);
  const blogs = [
    { name: "a", roll: "2" },
    { name: "a", roll: "2" },
  ];
  res.render("index", { title: "home", blogs: blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "home" });
});
//blog routes
app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});
