const Budget = require('../models/budget')
const budgetController = {}

budgetController.list = (req, res) => {
    Budget.find({ user: req.user._id})
        .then((budget) => {
            res.json(budget[0])
        })
        .catch((err) => {
            res.json(err)
        })
}

// budgetController.create = (req, res) => {
//     const body = req.body
//     const budget = new Budget(body)

//     budget.save()
//         .then((budget) => {
//             res.json(budget)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

budgetController.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    // body.user = req.user._id
    // Budget.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    //     .then((budget) => {
    //         res.json(budget)
    //     })
    //     .catch((err) => {
    //         res.json(err)
    //     })
    Budget.findOneAndUpdate({_id: id , user: req.user._id }, body, {new: true, runValidators: true})
        .then((budget) => {
            res.json(budget)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = budgetController