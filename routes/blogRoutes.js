const express = require("express");
const path = require("path");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/postblog", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "postblog.htm"));
});

router.post("/blogs", blogController.blog_create);

router.delete("/blogs:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  // Blog.findByIdAndDelete(id)

  //   .then((result) => {
  //     res.json({ redirect: "/blogs" });
  //   })
  //   .catch((err) => console.log(err));
});

module.exports = router;
