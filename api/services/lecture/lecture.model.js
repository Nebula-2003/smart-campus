import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
    {
        subject: {},
    },
    { timestamps: true, collection: "lecture" },
);

lectureSchema.plugin(softDelete, { overrideMethods: "all" });

const Lecture = mongoose.model("lecture", lectureSchema);

export default Lecture;
