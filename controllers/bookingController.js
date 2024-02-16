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
    getFactureById : async (req,res) =>{
        try{
            const {id} = req.params;
            const [result] = await bookingModel.queryGetFactureById(id);

    if (result[0] != null) {
            res.json(result);
        } else {
            res.status(401).send("Facture does not exist");
        }
        } catch (error) {
        res.status(500).send(error);
        }
    },


}

module.exports = bookingController;