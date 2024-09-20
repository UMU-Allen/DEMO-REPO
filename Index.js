const express = require("express");
const bodyParser =require("body-parser");

const PORT = 3300; // The port where our server will be running.

// instantiating express
const app =express();
// Set up the body-parser utility
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true}));
// Setting the templating engine
app.set("view engine","ejs");

// loading the login page
app.get("/",(request,response) => {
    response.render("Login");

});
// listen for incoming connections
app.listen(PORT, () => {
    console.log('The server is running on port ${PORT}');
});