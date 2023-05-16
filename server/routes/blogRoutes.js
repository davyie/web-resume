const express = require("express");

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById)
router.route("/update/:id").post(updateBlog);
router.route("/delete/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;
