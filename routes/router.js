// importer express
const express = require("express");
 // importer le router d'express
const router = express.Router();
const userController = require("../controllers/userController");

// creer les routes user
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.addNewUser);
router.put("/users", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/usersBoks/:id", userController.getUserbokById);



module.exports = router;