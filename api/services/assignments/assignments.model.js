import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const assignmentsSchema = new Schema(
    {
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true, collection: "assignments" },
);

assignmentsSchema.plugin(softDelete, { overrideMethods: "all" });

const Assignments = mongoose.model("assignments", assignmentsSchema);

export default Assignments;
