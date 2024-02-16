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
}

module.exports = userModel;