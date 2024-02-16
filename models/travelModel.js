const fantasia = require("../database");

const travelModel = {
    queryGetTravel : () => {
        return fantasia.query("select * from travel");
    },

}


module.exports = travelModel;