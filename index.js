const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const port = 5000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

//connect to db
const dbURI = `mongodb+srv://fahimalif:fahimkhan@cluster0.vigvf.mongodb.net/learnmongo?retryWrites=true&w=majority`;

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
