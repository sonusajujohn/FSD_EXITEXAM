const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors')

const app = new express();

require('./db/connection');

app.use(cors());

app.use(express.json());





const todoRoutes = require('./route/todoroutes')
app.use('/todo',todoRoutes);

const port=process.env.PORT;



app.listen(port,()=>{
    console.log(`The app is listening at port ${port}`)
})