const router = require("express").Router();
const Post = require("../models/PostSchema");

//CREATE

router.get("/", async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 15;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await Post.countDocuments({});
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/all", async (req, res) => {
  try {
    const posts = await Post.find().sort({ _id: -1 });

    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/search", async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await Post.find({ title });

    res.json({ posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/category", async (req, res) => {
  const { categoryQuery } = req.query;

  try {
    const category = new RegExp(categoryQuery, "i");
    const posts = await Post.find({ category });

    res.json({ posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.send(post);
  } catch (error) {
    res.status(500).send("Something went wrong...");
  }
});

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.send(savedPost);
  } catch (error) {
    res.status(500).send("Something went wrong...", error.message);
  }
});

module.exports = router;
