const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.send('Welcome to products page');
});

app.get('/products', function(req, res, next) {
  res.json([
    { id: 1, name:'Television'},
    { id: 2, name:'Radio'}
  ])
});

// catch undefined routes and respond with 404
app.use(function(req, res, next) {
  res.status(404).send("Page not found")
});

// catch server errors and respond with 500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('An error occured')
})

module.exports = app;

