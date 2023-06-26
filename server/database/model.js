const mongoose = require("mongoose");

const mongoUri = "mongodb://127.0.0.1:27017/clinic"

mongoose.connect(mongoUri).then(()=>{console.log("db connected")}).catch((error)=>{console.log(error);})
  const db = mongoose.connection;
const usersSchema = new mongoose.Schema({
    fullname:String,
    address:String,
    number:Number,
    general_health:String,
    date:String,
    message:String,
    image:String,
    cloudinary_id: String
    
})

const users= mongoose.model("users",usersSchema)

module.exports = {users,db}