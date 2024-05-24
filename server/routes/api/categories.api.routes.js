const router = require("express").Router();
const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Этот роут не нужен, потому что мы выведем на одной странице все категории кнопками и перейдем на другую стр

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;

//   if (isNaN(+id)) {
//     res.status(400).json({ message: "Id не число" });
//   }
//   try {
//     const category = await Category.findByPk(id);

//     if (!category) {
//       res.status(500).json({ message: error.message });
//     }
//     res.json(category); // Перепроверить что действительно нужен JSON
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
