const router = require('express').Router();
let Order = require('../models/order.model');
let User = require('../models/user.model');
let Product = require('../models/product.model');

router.route('/').post((req, res) => {

    Order.count({}, function (err, count) {
        if (err) {
            console.log(err);
        } else {

            const newOrder = new Order({
                _id: count + 1,
                owner: req.body.owner,
                status: 'NEW',
                products: req.body.products,
                weight: req.body.weight,
                date_of_creation: Date.now()
            });

            console.log(newOrder);

            req.body.products.map(product => {
                Product.findOneAndUpdate({_id: product.id}, {status: 'ORDERED'})
                    .then(() => console.log('OK'))
                    .catch(err => res.status(400).json('Error: ' + err));
            });

            newOrder.save()
                .then(() => res.json('Order saved'))
                .catch(err => res.status(400).json('Error: ' + err));
        }
    });
});

router.route('/').get((req, res) => {
    User.findOne({email: req.query.email})
        .then(user => {
            Order.find({owner: user._id})
                .then(orders => res.json(orders.filter(order => order.status !== 'CLOSED')))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders.filter(order => order.status !== 'CLOSED')))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/change-status').post((req, res) => {

    let status = req.body.status;

    Order.findOne({_id: req.body.id})
        .then(order => {
            switch (order.status) {
                case 'DELIVERED':
                    if (status === 'PAID'){
                        status = 'CLOSED';
                    }
                    return null;
                case 'PAID':
                    if (status === 'DELIVERED'){
                        status = 'CLOSED';
                    }
                    return null;
                case 'CLOSED':
                    return null;
                default:
                    return null;
            }
        })
        .then(() => {
            Order.findOneAndUpdate({_id: req.body.id}, {status: status})
                .then(() => res.json('Order status updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;