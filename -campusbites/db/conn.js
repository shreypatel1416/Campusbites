const mongoose = require("mongoose");
// require("dotenv").config();

// console.log("Database URL from .env file: ", process.env.DATABASE);

// const db = process.env.DATABASE;
// "mongodb+srv://technologyinformation470:6.a%aJyfjQFVZy.@cluster0.tmxfnna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const db =  "mongodb+srv://technologyinformation470:Prince2234p@cluster0.tmxfnna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then(() => console.log("Connection to Database successfully done!"))
  .catch((error) => console.log("Error: " + error.message));


