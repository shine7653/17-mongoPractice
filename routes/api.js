const express = require('express');
const router = express.Router();

const Ninja = require('../models/ninja');


// Get a list opf ninjas from the db
router.get('/ninjas', function (req, res) {
    console.log('GET request');
    res.send({ name: 'GET' });
})

// Add a new ninja to the db
router.post('/ninjas', function (req, res) {
    // console.log(req.body);

    // To use this we should import the Ninja model
    // Create a new instance (record)
    // User's gonna send some jason data based on Schema, 
    // We can get that of the rea.body
    // var ninja = new Ninja(req.body);

    // Whenever we save the ninja object, we're saving it to this collection 
    // how we actually save it to the database
    // ninja.save();

    // This returns a promise, we can tag on dot then method
    // The parameter function takes the ninja data which has saved to the DB, it returns to us
    
    // Ninja
    //     .create(req.body)
    //     .then(function (ninja) {
    //         console.log(ninja);
    //         res.send(ninja);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({ error: err })
    //     });

    // res.send( {
    //     type: 'POST',
    //     username: req.body.name,
    //     rank: req.body 
    // } );

    const ninja = new Ninja({
        username: '',
        rank: '',
        available:'',
        date: ''
    });

   ninja
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
});

// Update a ninja in the db
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT' });
});

// Delete a ninja from the db
router.delete('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;