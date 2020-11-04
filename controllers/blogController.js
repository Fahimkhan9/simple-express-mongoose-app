const Blog = require("../models/blogs");

const blog_create = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  blog_create,
};
