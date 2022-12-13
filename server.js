const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose'); //import mongoose package
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const { userRegisterCtrl } = require("./controllers/users/usersCtrl");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());
//Register
app.post("/api/users/register", userRegisterCtrl);

//Login
app.post("/api/users/login", (req, res) => {
  //business logic
  res.json({ user: "User Login" });
});

//fetch all user
app.get("/api/users", (req, res) => { 
  //business logic
  res.json({ user: "fetch all user" });
});

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
