import mongoose from "mongoose";

const print = `


▗▖  ▗▖ ▗▄▖ ▗▖  ▗▖ ▗▄▄▖ ▗▄▖ ▗▄▄▄ ▗▄▄▖      ▗▄▄▖ ▗▄▖ ▗▖  ▗▖▗▖  ▗▖▗▄▄▄▖ ▗▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄
▐▛▚▞▜▌▐▌ ▐▌▐▛▚▖▐▌▐▌   ▐▌ ▐▌▐▌  █▐▌ ▐▌    ▐▌   ▐▌ ▐▌▐▛▚▖▐▌▐▛▚▖▐▌▐▌   ▐▌     █  ▐▌   ▐▌  █
▐▌  ▐▌▐▌ ▐▌▐▌ ▝▜▌▐▌▝▜▌▐▌ ▐▌▐▌  █▐▛▀▚▖    ▐▌   ▐▌ ▐▌▐▌ ▝▜▌▐▌ ▝▜▌▐▛▀▀▘▐▌     █  ▐▛▀▀▘▐▌  █
▐▌  ▐▌▝▚▄▞▘▐▌  ▐▌▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀▐▙▄▞▘    ▝▚▄▄▖▝▚▄▞▘▐▌  ▐▌▐▌  ▐▌▐▙▄▄▖▝▚▄▄▖  █  ▐▙▄▄▖▐▙▄▄▀


`;

const connectToMongoDB = async () => {
    try {
        mongoose.set("debug", true);
        console.log(`MongoDB Connection URL : ${process.env.DB_MONGO_URL}`);
        await mongoose.connect(process.env.DB_MONGO_URL);
        console.log(print);
    } catch (e) {
        console.log("MongoDB Connection Error");
        console.log(e);
        process.exit(1);
    }
};

export { connectToMongoDB };
