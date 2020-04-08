const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').post((req, res) => {

    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        user_role: req.body.role,
        address: req.body.address,
        mobile: req.body.mobile
    });

    console.log(newUser);

    newUser.save()
        .then(() => res.json('User created'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    User.findOne({email: req.query.email})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;