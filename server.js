const express = require("express");
const dotenv = require("dotenv");
const cors=require('cors')
dotenv.config({ path: ".env" });
const ApiError=require("./utils/ApiError");
const morgan = require("morgan");
const globalError=require("./middleware/error_middleware")

const dbConnection=require("./config/databse")
const movieroute=require("./routes/moviesroute");
const categoryroute=require("./routes/category_route");


//connect with database 
dbConnection();     
 
const app = express();
app.use(cors())

// middleware


app.use(express.json()); 
// app.use(express.static(path.join(__dirname,'uploads')))
 
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`node:${process.env.NODE_ENV}`);
}




//mount  Routes
app.use("/api/v1/movies",movieroute)
app.use("/api/v1/category",categoryroute)



  

app.all('*',(req,res,next)=>{

// const err=new Error(`Cant find this route :${req.originalUrl}`)
// next(err.message)
next(new ApiError(`Cant find this route :${req.originalUrl}`,400))


})

// Gobal error handl middleware
app.use(globalError)

const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log(`app running on port ${PORT}`);
});
