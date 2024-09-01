const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://iloveyou080504:RegistrationPassword@registration.9cf5b.mongodb.net/",{
     serverSelectionTimeoutMS : 5001
});
mongoose.connection.on("connected", () =>{
    console.log("Connected to Database");
});
mongoose.connection.on("error", (error) =>{
    console.log("MongoDb connection error :", error);
});

module.exports = mongoose;
