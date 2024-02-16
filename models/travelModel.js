const fantasia = require("../database");

const travelModel = {
    queryGetAllTravels : () => {
        return fantasia.query(`select * from travel`);
    },
    queryGetTravelById : (id) => {
        return fantasia.query(`select * from travel where id = ${id}`);
    },
   // queryUpdateTravel : (destination_name, destination_description, nb_of_total_seats) => {
       // return fantasia.query(`update travel set destination_name = ?, destination_description = ?, nb_of_total_seats = ?`,
        //[destination_name, destination_description, nb_of_total_seats]);
    //},
    //queryDeleteTravel : (id) => {
        //return fantasia.query(`delete from travel where id = ${id}`);
    //},
    }


module.exports = travelModel;

