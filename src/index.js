import express from "express";
import env from "dotenv";
import cors from "cors";
import dotenv from "dotenv";
import pool  from "./config/db.js";
import userRoutes from "./routes/userRoute.js"
import errorHandler  from "./middlewares/errorHandler.js";
import  createUserTable from "./data/createUserTable.js";
import createProductTable from "./data/createProductTable.js";
import authRoutes from "./routes/userRoute.js"
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import productRoutes from "./routes/productRoutes.js";

const swaggerDocument = YAML.load('./swagger/swagger.yaml');

dotenv.config()

const app = express();
const port = process.env.PORT || 3001;
 
//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use("/api", productRoutes);
app.use("/api",userRoutes);
app.use("/api/auth",authRoutes);

//error handling middleware 
app.use(errorHandler);
  

//create table before starting service 
createUserTable();
createProductTable();
//testing postgreConnection

app.get("/",async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`the Database name is  :${result.rows[0].current_database } `)
})

//server running 

app.listen(port,()=>{
    console.log(`server is running on ${port}`); 
})

   