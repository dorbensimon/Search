const express = require('express');
const app = express();

app.use(express.json())

const url = 'https://restcountries.com/v3.1/all';

//Import routes
const mainroute =require('./router/router')

app.use(mainroute)

module.exports=app;