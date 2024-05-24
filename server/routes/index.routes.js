const router = require("express").Router();
const categories = require("./api/categories.api.routes");
const questions = require("./api/questions.api.routes");
const answers = require("./api/answers.api.routes");

router.use("/categories", categories);
router.use("/categories", questions);
router.use("/categories", answers);


module.exports = router;
