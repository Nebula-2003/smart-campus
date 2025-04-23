import mongoose from "mongoose";
import softDelete from "mongoosejs-soft-delete";

const Schema = mongoose.Schema;

const assignmnetsSchema = new Schema(
    {
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true, collection: "assignmnets" }
);

assignmnetsSchema.plugin(softDelete);

const Assignmnets = mongoose.model("assignmnets", assignmnetsSchema);

export default Assignmnets;
