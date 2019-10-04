const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
	res.json({message: "Essa é uma msg em formato json"});
});


module.exports = routes