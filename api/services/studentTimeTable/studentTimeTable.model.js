import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const studentTimeTableSchema = new Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    timeTable: { type: mongoose.Schema.Types.ObjectId, ref: "timeTable", required: true },
  },
  { timestamps: true, collection: "studentTimeTable" },
);

studentTimeTableSchema.plugin(softDelete, { overrideMethods: "all" });

const studentTimeTable = mongoose.model("studentTimeTable", studentTimeTableSchema);

export default studentTimeTable;
