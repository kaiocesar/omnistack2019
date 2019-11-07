const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect(
    (process.env.MONGODSN || 'URL FAIL'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(4003);