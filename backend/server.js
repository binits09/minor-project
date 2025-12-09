const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app = express();
app.use(cors());

connectdb();

app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.send("api is running");

});

const port = process.env.PORT || 5600;

app.listen(port,()=>{
    console.log("server is running on port- 5600");
});
