const express = require('express')
router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const categoriesController = require('../app/controllers/categoriesController')
const expensesController = require('../app/controllers/expensesController')
const budgetController = require('../app/controllers/budgetController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', authenticateUser, usersController.account)

router.get('/api/categories', authenticateUser, categoriesController.list)
router.post('/api/categories', authenticateUser, categoriesController.create)
router.get('/api/categories/:id', authenticateUser, categoriesController.show)
router.put('/api/categories/:id', authenticateUser, categoriesController.update)
router.delete('/api/categories/:id', authenticateUser, categoriesController.destroy)

router.get('/api/expenses', authenticateUser, expensesController.list)
router.post('/api/expenses', authenticateUser, expensesController.create)
router.get('/api/expenses/:id', authenticateUser, expensesController.show)
router.put('/api/expenses/:id', authenticateUser, expensesController.update)
router.delete('/api/expenses/:id', authenticateUser, expensesController.delete)

router.get('/api/budget', authenticateUser, budgetController.list)
// router.post('/api/budget', authenticateUser, budgetController.create)
router.put('/api/budget/:id', authenticateUser, budgetController.update)


module.exports = router