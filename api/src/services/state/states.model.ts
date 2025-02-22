import { Schema, model } from "mongoose";

import MongooseDelete from "mongoose-delete";
const statesSchema = new Schema(
    {
        name: String,
        country: {
            type: Schema.Types.ObjectId,
            ref: "countries",
        },
    },
    { timestamps: true, collection: "states" }
);

statesSchema.plugin(MongooseDelete);

const States = model("states", statesSchema);

export default States;
