import { Schema, model } from "mongoose";

import MongooseDelete from "mongoose-delete";
const citiesSchema = new Schema(
    {
        name: String,
        country: {
            type: Schema.Types.ObjectId,
            ref: "country",
        },
        state: {
            type: Schema.Types.ObjectId,
            ref: "state",
        },
    },
    { timestamps: true, collection: "cities" }
);

citiesSchema.plugin(MongooseDelete);

const Cities = model("cities", citiesSchema);

export default Cities;
