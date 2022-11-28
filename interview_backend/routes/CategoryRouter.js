const Router = require("express").Router;

const CategoryController = require("../controllers/CategoryController");

const router = new Router();

router.post("/add-new", CategoryController.addNew);
router.post("/categories-list", CategoryController.getCategoriesList);

module.exports = router;
