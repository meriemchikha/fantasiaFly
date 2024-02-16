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
    getFactureById: async (req,res) =>{
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
    addNewBooking: async (req, res) => {
        try{
        
          const { booking_date, cancellation_insurance, id_user, id_travel, id_payment } = req.body;
          const [result] = await bookingModel.queryAddNewBooking(booking_date, cancellation_insurance, id_user, id_travel, id_payment);
        if (!result.affectedRows) {
      res.send("erreur lors de l'enregistrement de votre réservation");
    } else {
      res.send("réservation effectuée");
    }
  } catch (error) {
    res.status(500).send(error);
  }},


}

module.exports = bookingController;