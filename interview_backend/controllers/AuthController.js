const { validationResult } = require("express-validator");
const ApiError = require('../exceptions/apiError');
const AuthService = require('../service/AuthService')

class AuthController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Невалидный email или пароль", errors.array())
        );
      }
      const user = await AuthService.registration(email, password);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AuthController();
