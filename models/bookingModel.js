const fantasia = require("../database");

const bookingModel = {
    queryGetBooking : () => {
        return fantasia.query("select * from booking");
    },

}


module.exports = bookingModel;


// la jointure entre les tables booking, user,travel et payment:
// SELECT
//     booking.id AS booking_id,
//     booking.booking_date,
//     booking.cancellation_insurance,
//     user.id AS user_id,
//     user.firstname,
//     user.lastname,
//     user.email,
//     user.city,
//     travel.id AS travel_id,
//     travel.destination_name,
//     payment.id AS payment_id,
//     payment.payment_date,
//     payment.sum
// FROM
// booking
// INNER JOIN user ON booking.id_user = user.id
// INNER JOIN travel ON booking.id_travel = travel.id
// INNER JOIN payment ON booking.id_payment = payment.id;


// SELECT b.id AS booking_id, sum(p.sum) AS total_paid
// FROM booking b
// JOIN payment p ON b.id_payement = p.id
// GROUP BY b.id;