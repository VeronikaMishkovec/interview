const bcrypt = require('bcrypt');

const ApiError = require('../exceptions/apiError');
const UserModel = require('../model/UserModel');
const tokenService = require('../service/TokenService')

class AuthService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("Пользователь с таким email уже существует");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserModel.create({
      email: email,
      password: hashPassword,
    });

    const tokens = tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user_id: user._id };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("No user with this email. Please register");
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      throw ApiError.BadRequest("Неверный пароль");
    }

    const tokens = tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });
    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, user_id: user._id, email: user.email };
  }
}

module.exports = new AuthService();
