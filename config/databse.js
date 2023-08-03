
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path:'.env'})
const dbConnection=()=>{
  mongoose 
  .connect(process.env.Mongo_URI) 
  .then((conn) => {
    console.log(`Datase connected:${conn.connection.host}`);
  })
  .catch((err) => {
    console.error(`database error:${err}`);
    process.exit();
  });

}
module.exports=dbConnection