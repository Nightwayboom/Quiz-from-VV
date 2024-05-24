const router = require("express").Router();
const { Answer } = require("../../db/models");

//в пути :categoryId - это динамический элемент и по сути там может стоять что угодно, завтра попробуем разобраться, но тема рабочая
router.get("/:categoryId/questions/:questionId/answers", async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.findAll({
      where: { question_id: questionId },
    });
    res.json(answers);
  } catch (error) {
    res.status(418).json({ error: error.message });
  }
});

module.exports = router;

// в пути :categoryId - это динамический элемент и по сути там может стоять что угодно, во фронте будет, для перехода на url следующего вопроса мы используем роутер пу 
// Router.push(`/categories/${question.category_id}/questions/${question.id}`)