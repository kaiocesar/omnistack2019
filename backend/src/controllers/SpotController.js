const SpotModel = require('../models/Spot');

module.exports = {

    async index(req, res) {
        const { techs } = req.query;        
        const spots = await SpotModel.find({ techs: techs });
        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const spot = await SpotModel.create({
            user: user_id,
            thumbnail: filename,
            company, 
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });

        return res.json(spot);
    }
}