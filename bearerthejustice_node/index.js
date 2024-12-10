const express = require('express');
const cors = require('cors');
const routes = require('./configs/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.use(cors());


app.listen('4001', () => {
    console.log('Backend Online!')
});