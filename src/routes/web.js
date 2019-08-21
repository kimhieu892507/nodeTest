import express from "express";
import authController from "./../controllers/authController";
import homeController from "./../controllers/homeController";

let router = express.Router();

/**
 * Init all routes
 * @param app from exactly express module
 */

 let initRoutes = (app) => {
     router.get("/", homeController);

     router.get("/login-register", authController.getLoginRegister);

     router.get("/logout",authController.getLogut);

     return app.use("/",router);
 };

 module.exports = initRoutes;