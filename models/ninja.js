const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create NinjaSchema & model (structured)
// const NinjaSchema = new mongoose.Schema
const NinjaSchema = new Schema({

    // _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        // required: 'Name field is required',
        trim: true,
        required: true
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
    // Add in geo location

    // username: {
    //     type: String,
    //     trim: true,
    //     required: "Username is Required"
    // },
    // password: {
    //     type: String,
    //     trim: true,
    //     required: "Password is Required",
    //     validate: [({ length }) => length >= 4, "Password should be longer."]
    // },
    // email: {
    //     type: String,
    //     unique: true,
    //     validate: {
    //         validator: () => Promise.resolve(false),
    //         message: 'Email validation failed'
    //     },
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    // },
    //   userCreated: {
    //     type: Date,
    //     default: Date.now
    //   }

});



// Create a model Ninja, pass in the name of the Collection of the database and Schema name
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;