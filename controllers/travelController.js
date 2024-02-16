const travelModel = require("../models/travelModel");

const travelController = {
    getTravel: async(req, res) => {
        const [result] = await travelModel.queryGetTravel();
        res.send(result);
    },

}

module.exports = travelController;