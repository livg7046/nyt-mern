const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
//const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.get("*", (req, res) => {
//   res.sendfile(path.join(__dirname, "index.html"))
// });



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/NYTdb");
let db = mongoose.connection;
db.once('open', function(){
    console.log("Connected to mongoDB");
})

// 127.0.0.1:27017

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server: PORT ${PORT}!`);
});
