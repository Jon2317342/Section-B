//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require("express");

//////////////////////////////////////////////////////
// CREATE APP
//////////////////////////////////////////////////////
const app = express();

//////////////////////////////////////////////////////
// USES
//////////////////////////////////////////////////////
app.use(express.json()); // change text from postman to json format
app.use(express.urlencoded({ extended: false }));

//////////////////////////////////////////////////////
// SETUP ROUTES
//////////////////////////////////////////////////////
const mainRoutes = require("./routes/mainRoutes"); // connect app to main routes
app.use("/", mainRoutes); // first para i just http req to call main routes

//////////////////////////////////////////////////////
// EXPORT APP
//////////////////////////////////////////////////////
module.exports = app;
