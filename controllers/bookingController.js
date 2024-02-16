const bookingModel = require ("../models/bookingModel");

const bookingController = {

    getBooking: async(req, res) => {
        const [result] = await bookingModel.queryGetBooking();
        res.send(result);
    },
    
    deleteBooking: async (req, res) => {
        try {
            const {id} = req.params;
            const [result] = await bookingModel.queryDeleteBooking(id);
        
        if (result.affectedRows) {
            res.send("Booking deleted");
        } else {
            res.status(401).send("Delete problem");
        }
        } catch (error) {
            res.status(500).send(error);
        }
    },
}


module.exports = bookingController;