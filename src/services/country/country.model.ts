import { Schema, model } from "mongoose";

import MongooseDelete from "mongoose-delete";
const countriesSchema = new Schema(
    {
        name: String,
        code: String,
        phoneCode: String,
        flag: String,
    },
    { timestamps: true, collection: "countries" }
);

countriesSchema.plugin(MongooseDelete);

const Countries = model("countries", countriesSchema);

export default Countries;
