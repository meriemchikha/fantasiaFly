const fantasia = require("../database");

const paymentModel = {
 
 
 queryGetPaymentBookingById: (id) => {
    return fantasia.query(`SELECT booking.id, booking.booking_date, booking.cancellation_insurance, payment.payment_date, payment.sum
    FROM booking
    JOIN payment ON booking.id_payment = payment.id where payment.id= ${id}`);
},

}


module.exports = paymentModel;