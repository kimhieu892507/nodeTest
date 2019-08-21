import mongoose from "mongoose"
import bluebird from "bluebird"

/**
 * Connect to MongoDB
 */
require('dotenv').config();
 let connectDB = () => {
    mongoose.Promise = bluebird;
    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    console.log(URI);
    return mongoose.connect(URI,{ useNewUrlParser: true });
};

module.exports = connectDB;