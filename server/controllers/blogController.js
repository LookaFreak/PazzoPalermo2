const blogPostModel = require("../models/blogModel");
const userModel = require("../models/userModel");

exports.createBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      title,
      subtitle,
      description,
      image,
      createdAt,
      category,
    } = req.body;
    if (!title || !description || !image || !category) {
      return res
        .status(401)
        .send({ success: false, message: "All fields are required" });
    }
    // console.log(res);
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User is not Registerted",
      });
    }
    // create a save post
    const blogPost = new blogPostModel({
      title,
      subtitle,
      description,
      image,
      category,
      createdBy: user._id,
      createdAt,
    });
    const createBlog = await blogPost.save();
    return res.status(200).send({
      success: true,
      message: "Blog created successfully!",
      createBlog,
    });
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: `Register Failed ${error.message}` });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await blogPostModel.find().populate("createdBy"); // Populate 'createdBy' with User data
    return res.status(200).send({
      success: true,
      message: "Blogs fetched successfully!",
      blogs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error fetching blog posts: ${error.message}`,
    });
  }
};
exports.getSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogPostModel.findById(id).populate("createdBy");
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog dose not find! please try again",
      });
    }

    res.status(200).send({
      success: true,
      message: "Blog find successfully",
      blog,
      // user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error in Fetching Single blog post ${error}`,
    });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogPostModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.subtitle) {
      blog.subtitle = req.body.subtitle;
    }
    if (req.body.description) {
      blog.description = req.body.description;
    }
    if (req.body.category) {
      blog.description = req.body.category;
    }
    const updatedBlog = await blog.save();
    res.status(201).send({
      success: true,
      message: "Blog updated Successfully",
      updatedBlog,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error in updating blog ${error}`,
    });
  }
};

// delete blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await blogPostModel.findById(id);
    if (!blog) {
      return res.status(400).send({
        success: false,
        message: "Blog not found",
      });
    }
    await blogPostModel.deleteOne({ _id: id });
    res.status(200).send({
      message: "Blog deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error in deleting the blog ${error}s`,
    });
  }
};

// Search blog post by category and title
exports.SearchBlog = async (req, res) => {
  const { category, title } = req.body;

  try {
    let search = {};
    if (category) {
      search.category = category;
    }
    if (title) {
      search.title = { $regex: title, $options: "i" };
    }
    const blogs = await blogPostModel.find(search);
    res.status(200).send({
      blogs,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error is Searching blog ${error}`,
    });
  }
};
exports.LikesBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    await blogPostModel.findByIdAndUpdate(
      blogId,
      { $inc: { likes: 1 } },
      { new: true } // Return the updated document
    );

    res.status(201).send({
      success: true,
      message: "Comment added successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Error in the likes button ${error}`,
    });
  }
};
