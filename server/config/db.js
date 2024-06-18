const mongoose = require("mongoose");
const db =
  "mongodb+srv://admindev:87TupR5SvUlNtFY8@mernstack1.9i4s6yp.mongodb.net/?retryWrites=true&w=majority&appName=MernStack1";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
