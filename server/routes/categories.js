const router = require("express").Router();
const Categories = require("../models/CategoriesSchema");

//CREATE

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find().sort({ _id: -1 });

    res.json(categories);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const newCategory = new Categories(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.send(savedCategory);
  } catch (error) {
    res.status(500).send("Something went wrong...", error.message);
  }
});

module.exports = router;
