const fantasia = require ("../database");

const bookingModel = {
   queryGetBooking : () => {
        return fantasia.query("select * from booking");
    },

    queryDeleteBooking : (id) => {
        return fantasia.query(`delete from booking where id = ${id}`);
},
}


module.exports = bookingModel;