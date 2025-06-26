import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
    {
        name: { type: String, required: true },
        code: { type: String, required: true },
    },
    { timestamps: true, collection: "subjects" },
);

subjectSchema.plugin(softDelete, { overrideMethods: "all" });

const Subject = mongoose.model("subjects", subjectSchema);

export default Subject;
