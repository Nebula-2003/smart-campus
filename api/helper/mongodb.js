import mongoose from "mongoose";

const mongo_connection = async () => {
	mongoose.set("debug", true);
	try {
		console.log(process.env.DB_MONGO_URL);
		await mongoose.connect(process.env.DB_MONGO_URL);
		console.log("MongoDB Connection Established");
	} catch (e) {
		console.log("🚀 ~ constmongo_connection= ~ e:", e);
		console.log("MongoDB Connection Error");
	}
};

export { mongo_connection };
