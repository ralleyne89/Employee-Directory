const express = require("express");


let PORT = process.env.PORT || 8000;
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
  console.log("Listening on Port: " + PORT);
});