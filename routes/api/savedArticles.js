const router = require("express").Router();
const savedArticlesController = require("../../controllers/savedArticlesController");

// route: GET api/articles
router.get('/', (req, res) => {
  ArticleController.find()
    .then(articles => res.json(articles));
});
  
// route: POST api/articles
router.post('/', (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    publishDate: req.body.publishDate,
    url: req.body.url,
    synopsis: req.body.synopsis
  });



// router.route("/")
//   .get(savedArticlesController.findAll)
//   .post(savedArticlesController.create);

// router
//   .route("/:id")
//   .delete(savedArticlesController.remove);



  newArticle.save().then(article => res.json(article));
});




module.exports = router;
