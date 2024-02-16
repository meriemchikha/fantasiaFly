const fantasia = require("../database");

const bookingModel = {
    queryGetBooking : () => {
        return fantasia.query("select * from booking");
    },
      queryGetAllInfo : () => {
        return fantasia.query(`SELECT u.id, u.firstname, u.lastname, u.email, u.phone_number, t.destination_name, tp.type_transport, DATE_FORMAT(pr.date_departure, '%d-%m-%y') AS formatted_date_departure, DATE_FORMAT(pr.date_return, '%d-%m-%y') AS formatted_date_return, DATE_FORMAT(b.booking_date, '%d-%m-%y') AS formatted_booking_date, p.unit_price, p.quantity, p.unit_price * p.quantity AS total_price
FROM booking as b
JOIN travel AS t ON t.id = b.id_travel
JOIN travel_period AS tp ON t.id = tp.id_travel
JOIN period AS pr ON tp.id_period = pr.id
JOIN user AS u ON u.id = b.id_user
JOIN payment AS p ON b.id_payment = p.id; `);
    },
    queryGetFactureById : (id) => {
        return fantasia.query(`SELECT u.id as id_user, u.firstname, u.lastname, u.email, u.phone_number, t.destination_name, tp.type_transport, DATE_FORMAT(pr.date_departure, '%d-%m-%y') AS formatted_date_departure, DATE_FORMAT(pr.date_return, '%d-%m-%y') AS formatted_date_return, DATE_FORMAT(b.booking_date, '%d-%m-%y') AS formatted_booking_date, p.unit_price, p.quantity, p.unit_price * p.quantity AS total_price
FROM booking as b
JOIN travel AS t ON t.id = b.id_travel
JOIN travel_period AS tp ON t.id = tp.id_travel
JOIN period AS pr ON tp.id_period = pr.id
JOIN user AS u ON u.id = b.id_user
JOIN payment AS p ON b.id_payment = p.id
WHERE u.id = ${id}`);
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