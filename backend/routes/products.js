const router = require('express').Router();
let Product = require('../models/product.model');
let User = require('../models/user.model');

router.route('/').post((req, res) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yy = now.getFullYear();
    now = dd + '/' + mm  + '/' + yy;

    User.findOne({email: req.body.email})
        .then(user => {
            const newProduct = new Product({
                owner: user._id,
                description: req.body.description,
                date: now
            });

            console.log(newProduct);

            newProduct.save()
                .then(() => res.json('Product created'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    User.findOne({email: req.query.email})
        .then(user => {
            Product.find({owner: user._id})
                .then(products => res.json(products.filter(prod => prod.status === 'NEW')))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;