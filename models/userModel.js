const fantasia = require("../database");

const userModel = {
    queryGetAllUsers : () => {
    return fantasia.query("select firstname, lastname, birth_date, email, phone_number, address, postal_code, city, country from user");
},
queryGetUserById : (id) =>{
    return fantasia.query(`select *from user where id = ${id}`);
},
queryAddNewUser : (firstname, lastname, birth_date, email, phone_number, address, postal_code, city, country, hashPassword) => {
    return fantasia.query("insert into user (firstname, lastname, birth_date, email, phone_number, address, postal_code, city, country, hashPassword) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [firstname, lastname, birth_date, email, phone_number, address, postal_code, city, country, hashPassword]);
},
queryUpdateUser : (firstname, lastname, birth_date, password, phone_number, address, postal_code, city, country, email) => {
    return fantasia.query("UPDATE user SET firstname = ?, lastname = ?, birth_date = ?, password = ?, phone_number = ?, address = ?, postal_code = ?, city = ?, country = ? where email = ? ", [firstname, lastname, birth_date, password, phone_number, address, postal_code, city, country, email]);
},
queryDeleteUser : (id) => {
    return fantasia.query(`delete from user where id= ${id}`);
},
  queryGetUserbokById: (id) => {
    return fantasia.query(`select u.id, u.firstname, u.lastname, u.city, b.booking_date, b.cancellation_insurance from user as u inner join booking as b on u.id = b.id where u.id= ${id}`);
  },
  queryGetAllBookingsByUser: (id) => {
        return fantasia.query(`select u.id, u.firstname, u.lastname, u.email,
         
            JSON_ARRAYAGG(
                JSON_OBJECT(
            'destination', t.destination_name,
            'booking_id', b.id,
            'booking_date', b.booking_date,
            'insurance_annulation', b.cancellation_insurance,
            'quantity', p.quantity,
            'total_price', p.quantity * p.unit_price
                            ))
                    as bookings from user as u join booking as b on u.id = b.id_user join payment as p on p.id = b.id_payment join travel as t on t.id = b.id_travel where u.id = ${id}`);
                     
}};

module.exports = userModel;