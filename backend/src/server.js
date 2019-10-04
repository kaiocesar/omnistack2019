const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.json({message: "Essa é uma msg em formato json"});
});

app.listen(4001);
