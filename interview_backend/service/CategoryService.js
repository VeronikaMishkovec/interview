const CategoryModel = require('../model/CategoryModel')

class CategoryService {
  async addNew(title) {

    const category = await CategoryModel.create({
      title: title
    });

    return category;
  }
}

module.exports = new CategoryService();
