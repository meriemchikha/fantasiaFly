const paymentModel = require("../models/paymentModel");

const paymentController = {
 getPaymentBookingById: async (req, res) => {
    try {
      const {id} = req.params;

      const [result] = await paymentModel.queryGetPaymentBookingById(id);

      if (result != null) {
        res.json(result);
      } else {
        res.status(401).send(" ");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // addPayment : async (req, res) => {
  //       try{
  //         const payment = req.body;
  //         const [result] = await paymentModel.queryAddPayment(payment);
  //       if (result.affectedRows) {
  //       res.send(`Payment created by id : ${result.insertId}`);
  //     } else {
  //       res.status(401).send("Impossible to add new payment");
  //     }
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // },
}
module.exports = paymentController;