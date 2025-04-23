import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
    {
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true, collection: "subject" },
);

subjectSchema.plugin(softDelete, { overrideMethods: "all" });

const Subject = mongoose.model("subject", subjectSchema);

export default Subject;
