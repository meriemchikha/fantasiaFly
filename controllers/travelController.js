const travelModel = require("../models/travelModel");

const travelController = {

    getAllTravels: async (req, res) => {
        const [result] = await travelModel.queryGetAllTravels();
        res.send(result);
    },
    
    getTravelById: async (req, res) => {
        try {
            const {id} = req.params;
            const [result] = await travelModel.queryGetTravelById(id);

        if (result != null) {
            res.json(result);
        } else {
            res.status(404).send("Not Found");
        }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateTravel: async (req, res) => {
        try {
            const {destination_name, destination_description, nb_of_total_seats} = req.body;
            const [result] = await travelModel.queryUpdateTravel (destination_name, destination_description, nb_of_total_seats);
        
        if (result.affectedRows) {
            res.send("Travel was updated succesfully");
        } else {
            res.status(401).send("Update problem");
        }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    
}

module.exports = travelController;
