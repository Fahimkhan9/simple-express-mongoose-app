const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const app = express();
const port = 5000;

app.set("view engine", "ejs");

//TODO: middleware & static files

app.use(express.static("views"));

app.use(morgan("dev"));

const dbURI = `mongodb+srv://fahimalif:fahimkhan@cluster0.vigvf.mongodb.net/learnmongo?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
//add blogs to db
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Blog title1",
//     body: "blog body 1",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });
//get all  blogs from db
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
//get single blog from db
// app.get("/single-blog",(req,res) => {
//   Blog.findById("5fa0f60fb657df72d40ca210")
//   .then(result => res.send(result))
//   .catch(err => console.log(err))

// })

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

app.get("/blog", (req, res) => {
  res.render("create", { title: "home" }, { root: "./index.js" });
});

app.use((req, res) => {
  res.status(404).render("404");
});
