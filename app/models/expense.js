const mongoose = require('mongoose');

const { Schema } = mongoose;

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  expenseDate: {
    type: Date,
    requied: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  deletedAt: {
    type: Date,
    requied: true,
    default: null,
  }
}, {
  timestamps: true,
  virtuals: {
    categoryString: {
      get() {
        return this.category.toJSON();
      },
    },
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
