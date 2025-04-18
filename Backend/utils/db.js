import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOBFINDER"
    }).then(() => {
        console.log("connected to database")
    }).catch((error) => {
        console.log(`some error occured while connecting to database: ${error}`)
    })
    };
export default connectDB;