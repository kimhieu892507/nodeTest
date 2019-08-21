//let express = require("express");
import express from "express";
import ConnectDB from "./config/connectDB";
//import ContactModel from "./model/contact.model";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web"

require('dotenv').config();

//init app 
let app = express();

//connect DB
ConnectDB();

//config view engine
configViewEngine(app);

//int all route
initRoutes(app);

/*app.get("/",(req,res)=>{
    return res.render("main/master");
})

app.get("/login-register",(req,res)=>{
    return res.render("auth/loginRegister");
})

/*app.get("/test-database", async(req,res) =>{
    try{
        let item= {
            userId : "12345",
            contactId : "45678"
        };
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    }
    catch(err)
    {
        console.log(err);
    }
});*/

app.listen(process.env.APP_POST,process.env.APP_HOST,()=>{
    console.log(`Good morning!!!, I'm running at ${process.env.APP_HOST}:${process.env.APP_POST}/`)
});