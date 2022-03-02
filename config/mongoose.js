const mongoose = require("mongoose");
const URL="mongodb+srv://siddhu:siddhu@cluster0.oboi7.mongodb.net/csvDatabase?retryWrites=true&w=majority";

/*******************MAKING CONNECTION***************************/
//mongoose.connect("mongodb://localhost/CSV");
mongoose.connect(URL).then(()=>{
console.log("database connected");
}).catch(() => {
 console.log("database error");
});
//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});