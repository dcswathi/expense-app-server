const Expense = require('../models/expense');

const expensesController = {};

expensesController.list = (req, res) => {
  Expense.find({ user: req.user._id })
    .then((expenses) => {
      res.json(expenses);
    })
    .catch((err) => {
      res.json(err);
    });
};

expensesController.create = (req, res) => {
  const { body } = req;
  const expense = new Expense(body);

  expense.user = req.user._id;
  expense.save()
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.json(err);
    });
};

expensesController.show = (req, res) => {
  const { id } = req.params;

  Expense.findById(id)
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.json(err);
    });
};

expensesController.update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Expense.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.json(err);
    });
};

expensesController.delete = (req, res) => {
  const { id } = req.params;

  Expense.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true, runValidators: true })
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.json(err);
    });
};

expensesController.undoDelete = (req, res) => {
  const { id } = req.params;

  Expense.findByIdAndUpdate(id, { deletedAt: null }, { new: true, runValidators: true })
    .then((expense) => {
      res.json(expense);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = expensesController;
