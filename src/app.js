'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

const Product = require('./models/product')

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

//Converte o corpo da requisiçao para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/produts', productRoute);

module.exports = app;