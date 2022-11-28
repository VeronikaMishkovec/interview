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

  async getCategoriesList(req, res, next) {
    try {
      const list = await CategoryService.getCategoriesList()
      return res.json(list)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new CategoryController();
