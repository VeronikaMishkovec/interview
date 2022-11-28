const Router = require("express").Router;

const CategoryController = require("../controllers/CategoryController");

const router = new Router();

router.post("/add-new", CategoryController.addNew);

module.exports = router;
