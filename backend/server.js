const app = require("./app");
const cloudinary = require('cloudinary')

const connectDatabase = require("./config/database")

//handling Uncaught Exception 

process.on("uncaughtException",(err)=>{

    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to Uncaught Exception `);
    process.exit(1)
})


//Config
if(process.env.NODE_ENV!="PRODUCTION"){
    require('dotenv').config({path:"backend/config/config.env"})
}

// Connecting tot database

connectDatabase()

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


app.listen(process.env.PORT,()=>{

    console.log(`server is working on http://localhost:${process.env.PORT}`)

})


//Unhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to unhandled Rejection`);

    server.close(()=>{
        process.exit(1);
    })
})