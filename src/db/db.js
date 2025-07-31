import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";

const connectDB = async () => {
    try {
        const connectionInstence = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`\n MongoDB connected and hosted !!:${connectionInstence}`);
    } catch (error) {
        console.error("DB connection err", error);
        throw error;
    }
};

export default connectDB;
