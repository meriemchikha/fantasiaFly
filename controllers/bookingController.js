const bookingModel = require("../models/bookingModel");

const bookingController = {
    getBooking: async(req, res) => {
        const [result] = await bookingModel.queryGetBooking();
        res.send(result);
    },

}

module.exports = bookingController;