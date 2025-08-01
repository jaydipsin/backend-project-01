// import mongoose from "mongoose";
// import { DB_NAME } from "constants";
// import express from "express";
// import { error, log } from "console";
import * as dotenv from "dotenv";

import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then((res) =>
        app.listen(process.env.PORT || 3000, () => {
            console.log("Server is connected to 8000");
        })
    )
    .catch((err) => {
        throw err;
    });

/*











const app = express()(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERR:");
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on : ${process.env.PORT}`)
        })
    } catch (error) {
        console.error(error);
        throw error;
    }
})();

*/
