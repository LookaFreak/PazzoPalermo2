const express = require("express");
const {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  SearchBlog,
  LikesBlog,
} = require("../controllers/blogController");
const { authenticate } = require("../midelwares/authentication");
const router = express.Router();

// create blog
router.post("/create-blog/:id", createBlog);

// get Blog
router.get("/blogs", getAllBlog);

// get single blog by id
router.get("/blogSingle/:id", getSingleBlog);

// update blog
router.put("/update-blog/:id", updateBlog);

// delete Blog
router.delete("/delete-blog/:id", deleteBlog);

// search blog
router.get("/search", SearchBlog);

// likes blog
router.post("/likes/:blogId", LikesBlog);

module.exports = router;
