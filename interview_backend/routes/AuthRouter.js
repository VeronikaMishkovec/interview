const Router = require("express").Router;
const { body } = require("express-validator");

const AuthController = require("../controllers/AuthController");

const router = new Router();

router.post(
    "/registration", //params: password, email
    body("email").isEmail(),
    body("password").isLength({ min: 4 }),
    AuthController.registration
);
router.post(
  "/login", //params: password, email
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  AuthController.login
);
router.post("/refresh", AuthController.refresh); //params: token

module.exports = router;
