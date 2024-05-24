const router = require("express").Router();
const { Question, Category } = require("../../db/models");

router.get("/:categoryId/questions", async (req, res) => {
    // Тут мы получаем массив всех вопросов по конкретной категории
  try {
    const {categoryId} = req.params
    const quest = await Question.findAll({
     where: {category_id: categoryId}
    });

    res.json(quest);
  } catch (error) {
    res.status(418).json({ error: error.message });
  }
});

router.get("/:categoryId/questions/:questionId", async (req, res) => {
    //Тут мы получаем один вопрос по конкретной категории
  try {
    const { categoryId, questionId } = req.params;
    const quest = await Question.findAll({
      where: { category_id: categoryId },
    });
    
    res.json(quest[+questionId - 1]);
  } catch (error) {
    res.status(418).json({ error: error.message });
  }
});


module.exports = router;
