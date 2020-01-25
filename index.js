const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// initialize routes
// const routes = require("./routes/api");
// app.use('/api', routes);
app.use('/api', require("./routes/api"));

// ----------------------------------
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ninjago',

    { useNewUrlParser: true, useUnifiedTopology: true },    
    () => console.log("connected to database!")
);

// mongoose.Promise = global.Promise;



// Heroku, that might be environment variable
app.listen(process.env.port || 4000, function() {
    console.log('Listening for requests at 4000');
});
//------------------- node.index.js -> Nothing, becuase we didn't request handles
// ==============================================================================

//----------------------Handling request in Express

// app.get('/api', function(req, res) {
//     console.log('GET request');   // ------------ localhost:4000--> nothing shows up
//     // res.end();   // -------- localhost:4000--> GET request shows up, response ended
//     res.send( {  
//         name: 'Sinae'
//     });
// })

// ----------------------npm i -g nodemon/ nodemon --save-dev/ nodemon index






