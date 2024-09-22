import mongoose from "mongoose";

const mongoConnection = async () => {
    mongoose.set("debug", true);
    try {
        const mongooseConnectionString = process.env.DB_MONGO_URL ? process.env.DB_MONGO_URL : process.exit(1);
        const res = await mongoose.connect(mongooseConnectionString);
        if (res) {
            console.log("MongoDB Connected");
        }
    } catch (e) {
        console.log("MongoDB Connection Error");
        console.log(e);
    }
};
export { mongoConnection };
