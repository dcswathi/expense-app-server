const Category = require('../models/category')
const categoriesController = {}

categoriesController.list = (req, res) => {
    Category.find({ user: req.user._id })
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesController.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    
    category.user = req.user._id
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesController.show = (req, res) => {
    const id = req.params.id
    Category.findById(id)
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

categoriesController.delete = (req, res) => {
    const { id } = req.params;
  
    Category.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, runValidators: true })
      .then((category) => {
        res.json(category);
      })
      .catch((err) => {
        res.json(err);
      });
  };


module.exports = categoriesController