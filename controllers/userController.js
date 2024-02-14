const userModel = require("../models/userModel");

const userController = {
    getAllUsers: async(req, res) => {
        const [result] = await userModel.queryGetAllUsers();
        res.send(result);
    },
    getUserById : async (req,res) =>{
        try{
            const {id} = req.params;
            const [result] = await userModel.queryGetUserById(id);

    if (result != null) {
            res.json(result);
        } else {
            res.status(401).send("user does not exist");
        }
        } catch (error) {
        res.status(500).send(error);
        }
    },
    addNewUser : async (req, res) => {
        try{
          const user = req.body;
          const [result] = await userModel.queryAddNewUser(user);
        if (result.affectedRows) {
        res.send(`User created by id : ${result.insertId}`);
      } else {
        res.status(401).send("Impossible to add new user");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateUser: async (req,res) => {
    try {
        const { firstname, lastname, birth_date, password, phone_number, address, postal_code, city, country, email} = req.body;
        const [result] = await userModel.queryUpdateUser( firstname,
        lastname,
        birth_date,
        password,
        phone_number,
        address,
        postal_code,
        city,
        country,
        email );

      if (result.affectedRows) {
        res.send("Update User");
      } else {
        res.status(401).send("Update problem");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const [result] = await userModel.queryDeleteUser(id);

      if (result.affectedRows) {
        res.send("User deleted");
      } else {
        res.status(401).send("delete problem");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getUserbokById: async (req, res) => {
    try {
      const {id} = req.params;

      const [result] = await userModel.queryGetUserbokById(id);

      if (result != null) {
        res.json(result);
      } else {
        res.status(401).send("client n'existe pas avec cette reservation");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },


}





module.exports = userController;