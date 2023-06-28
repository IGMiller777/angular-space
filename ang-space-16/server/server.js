const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/newCollection", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const contactSchema = {
  email: String,
  query: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/contact", function(req, res){
  res.render("contact");
});

app.post("/contact", function (req, res) {
  console.log(req.body.email);
  const contact = new Contact({
    email: req.body.email,
    query: req.body.query,
  });
  contact.save(function (err) {
    if (err) {
      throw err;
    } else {
      res.render("contact");
    }
  });
});

app.listen(3000, function(){
  console.log("App is running on Port 3000");
});


// // console.log('Hhhh')
// // const express = require('express');
// // const server = express();
// //
// // server.get("/", (req, res) => {
// //   res.sendFile(__dirname + '/index.html');
// // });
// //
// // const port = 4000;
// //
// // server.listen(port, () => {
// //   console.log(`Server listening at ${port}`);
// // });
//
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const os = require('os');
// const jwt = require('jsonwebtoken');
//
// const config = require('./config');
// const user = require('./routes/user.js');
// const expense = require('./routes/expense.js');
//
// const port = process.env.PORT || config.serverport;
//
// mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
//   if (err) {
//     console.log('Error connecting database, please check if MongoDB is running.');
//   } else {
//     console.log('Connected to database...');
//   }
// });
//
// // use body parser so we can get info from POST and/or URL parameters
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(require('body-parser').json({type: '*/*'}));
//
// app.use(express.static(__dirname + '/dist'));
// // use morgan to log requests to the console
// app.use(morgan('dev'));
//
// // Enable CORS from client-side
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });
//
// // basic routes
//
// app.get('/', function (req, res) {
//   res.send('Expense Watch API is running at ' + os.hostname() + ':' + port + '/api');
// });
//
// app.post('/register', user.signup);
//
// // express router
// var apiRoutes = express.Router();
//
// app.use('/api', apiRoutes);
//
// apiRoutes.post('/login', user.login);
//
// apiRoutes.use(user.authenticate); // route middleware to authenticate and check token
//
// // authenticated routes
// apiRoutes.get('/', function (req, res) {
//   res.status(201).json({message: 'Welcome to the authenticated routes!'});
// });
//
// apiRoutes.get('/user/:id', user.getuserDetails); // API returns user details
//
// apiRoutes.put('/user/:id', user.updateUser); // API updates user details
//
// apiRoutes.put('/password/:id', user.updatePassword); // API updates user password
//
// apiRoutes.post('/expense/:id', expense.saveexpense); // API adds & update expense of the user
//
// apiRoutes.delete('/expense/:id', expense.delexpense); //API removes the expense details of given expense id
//
// apiRoutes.get('/expense/:id', expense.getexpense); // API returns expense details of given expense id
//
// apiRoutes.post('/expense/total/:id', expense.expensetotal); // API returns expense details of given expense id
//
// apiRoutes.post('/expense/report/:id', expense.expensereport); //API returns expense report based on user input
//
// // kick off the server
// app.listen(port);
// console.log('Expense Watch app is listening at ' + os.hostname() + ':' + port);
