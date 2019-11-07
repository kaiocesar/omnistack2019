const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email, name, age } = req.body;
        let user = await UserModel.findOne({ email });
        if (!user) {
            user = await UserModel.create({ email, name, age, activate: false });
        }

        return res.json(user);
    }
};
