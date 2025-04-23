import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
    {
        subject: { type: String, required: true },

        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },

        classroom: { type: mongoose.Schema.Types.ObjectId, ref: "classroom", required: true },
        teacher: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

        teacherEntryTime: { type: Date, required: true },
        teacherExitTime: { type: Date, required: true },

        students: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    },
    { timestamps: true, collection: "lecture" },
);

lectureSchema.plugin(softDelete, { overrideMethods: "all" });

const Lecture = mongoose.model("lecture", lectureSchema);

export default Lecture;
