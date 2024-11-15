const mongoose=require('mongoose');

const mongoDB=process.env.MONGODB_URL;

mongoose.connect(mongoDB,).then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY");
}).catch(()=>{
    console.log("DATABSE CONNECTION FAILED");
})