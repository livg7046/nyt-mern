const router = require("express").Router();
const articleRoutes = require("./savedArticles");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
