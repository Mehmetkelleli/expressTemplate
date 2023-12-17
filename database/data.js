const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = connect = async()=>{

    try {
        await mongoose.connect(process.env.mongoUrl);
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Error")
    }

}
