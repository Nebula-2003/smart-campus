import mongoose from "mongoose";

const mongo_connection = () => {
    mongoose.set("debug", true);
    try {
        console.log(process.env.DB_MONGO_URL);
        mongoose.connect(process.env.DB_MONGO_URL || 'mongodb://localhost:27017/boiler-plat', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, (err) => {
            if (err) {
                console.log("MongoDB Database Connection Error", err);
            } else {
                console.log("MongoDB Connection Done!!");
            }
        });
    } catch (e) {
        console.log("MongoDB Connection Error");
    }
};

export { mongo_connection };
