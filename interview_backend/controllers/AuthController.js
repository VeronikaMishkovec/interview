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

  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await AuthService.login(email, password);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    const { token } = req.body;
    try {
      const refreshToken = await AuthService.refresh(token);

      return res.json(refreshToken);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AuthController();
