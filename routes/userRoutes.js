const express = require("express");
const router = express.Router();
// import { jwt } from "../middlewares/jwt";
const { validateJwtToken } = require("../middlewares/jwtMiddleware");  // <-- Use require() instead of import
const { registerUser, loginUser,getAllUsers } = require("../controllers/userController");

// Route to register a new user
router.post("/register", registerUser);

// Route to login an existing user
// router.post("/login", jwt, loginUser);
router.post("/login", loginUser);

// Protected route to get all users
router.get("/getallusers", validateJwtToken, getAllUsers);

module.exports = router;