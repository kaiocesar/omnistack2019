const BookingModel = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        
        const Booking = await BookingModel.create({
            date,
            user: user_id,
            spot: spot_id,
            approved: true
        });

        await Booking.populate('spot').populate('user').execPopulate();

        return res.json(Booking);
    }
}