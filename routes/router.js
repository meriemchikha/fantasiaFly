// importer express
const express = require("express");
 // importer le router d'express
const router = express.Router();
const userController = require("../controllers/userController");
const travelController = require ("../controllers/travelController");
const bookingController = require("../controllers/bookingController");
const { hashPassword } = require("../middlewares/hashPassword");
const { verifyPassword, verifyToken } = require("../middlewares/auth");


// creer les routes user
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", hashPassword, userController.addNewUser);
router.put("/users", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/usersBoks/:id", userController.getUserbokById);

// routes travel
router.get("/travels", travelController.getAllTravels);
router.get("/travels/:id", travelController.getTravelById);
//router.put("/travels/:id", travelController.updateTravel);
//router.delete("/travels/:id", travelController.deleteTravel);

// routes booking
router.get("/bookings", bookingController.getBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);



module.exports = router;