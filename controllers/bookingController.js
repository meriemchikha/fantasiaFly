const bookingModel = require("../models/bookingModel");

const bookingController = {
    getBooking: async(req, res) => {
        const [result] = await bookingModel.queryGetBooking();
        res.send(result);
    },
        getAllInfo: async(req, res) => {
        const [result] = await bookingModel.queryGetAllInfo();
        res.send(result);
    },


}

module.exports = bookingController;