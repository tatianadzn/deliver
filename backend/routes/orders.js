const router = require('express').Router();
let Order = require('../models/order.model');
let User = require('../models/user.model');
let Product = require('../models/product.model');

router.route('/').post((req, res) => {
    const newOrder = new Order({
        owner: req.body.owner,
        status: 'NEW',
        cost: req.body.cost,
        products: req.body.products,
        date_of_creation: Date.now()
    });

    console.log(newOrder);

    req.body.products.map(product => {
        Product.findOneAndUpdate({_id: product.id}, {status: 'ORDERED'})
            .then(() => console.log('OK'))
            .catch(err => res.status(400).json('Error: ' + err));
    });

    newOrder.save()
        .then(order => res.json(order._id))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/').get((req, res) => {
    User.findOne({email: req.query.email})
        .then(user => {
            Order.find({owner: user._id})
                .then(orders => res.json(orders))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;