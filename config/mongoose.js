const mongoose = require("mongoose");

const db =
  "mongodb+srv://seef:seef123@cluster0.kb0atuc.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose
  .connect(db)
  .then(() => console.log("Connected to my DB"))
  .catch((err) => console.log(err));
