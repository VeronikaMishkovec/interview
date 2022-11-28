const CategoryModel = require('../model/CategoryModel')

class CategoryService {
  async addNew(title) {
    const category = await CategoryModel.create({
      title: title
    });
    return category;
  }

  async getCategoriesList() {
    const list = await CategoryModel.find({})
    return list;
  }
}

module.exports = new CategoryService();
