const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const errorController = require('../controllers/error');

//setting up templating engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // its default, you can change it if your views folder has another name and location.

// App routes
const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/shop');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Returning 404 if not exists
app.use(errorController.get404);

// Listen for incomming requests on port 3000
app.listen(3000);
console.log("AAA");

// Try localhost:3000 on the browser to see the console logs.
