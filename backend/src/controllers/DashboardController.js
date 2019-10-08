const SpotModel = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;
        const spots = await SpotModel.find({ user: user_id });
        return res.json(spots);
    },
}