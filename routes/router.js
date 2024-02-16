// importer express
const express = require("express");
 // importer le router d'express
const router = express.Router();
const userController = require("../controllers/userController");
const paymentController = require("../controllers/paymentController");
const travelController = require("../controllers/travelController");
const bookingController = require("../controllers/bookingController");
const  hashPassword  = require("../milddlewares/hashPassword");

// creer les routes user
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
// router.post("/users", userController.addNewUser);
router.put("/users", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);


// route user pour hasher le mot de passe
router.post("/users", hashPassword, userController.addNewUser);
 
// creer les routes booking 
 router.get("/bookings", bookingController.getBooking)

// creer les routes payment 
router.get("/payments-bookings/:id", paymentController.getPaymentBookingById);
// router.post("/payments", paymentController.addPayment);


//creer les travels
router.get("/travels", travelController.getTravel);


// les des jointures
router.get("/usersBoks/:id", userController.getUserbokById);
router.get("/facture", bookingController.getAllInfo);
router.get("/facture/:id", bookingController.getFactureById);


module.exports = router;