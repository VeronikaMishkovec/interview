const CategoryService = require('../service/CategoryService')

class CategoryController {
  async addNew(req, res, next) {
    const { title } = req.body;
    try {
      const category = await CategoryService.addNew(title);
      return res.json(category);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CategoryController();
