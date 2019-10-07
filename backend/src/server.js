const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
    (process.env.MONGODSN || 'URL FAIL'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(express.json());
app.use(routes);
app.listen(4003);