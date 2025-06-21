import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const scannerSchema = new Schema(
    {
        name: { type: String, required: true }, // e.g. "Main Gate Scanner"
        location: { type: String }, // optional text label
        ipAddress: { type: String }, // for logging/diagnostics
        isActive: { type: Boolean, default: true },

        // Optionally: assigned classroom
        classroom: { type: mongoose.Schema.Types.ObjectId, ref: "classroom" },
    },
    { timestamps: true, collection: "scanner" },
);

scannerSchema.plugin(softDelete, { overrideMethods: "all" });

const scanner = mongoose.model("scanner", scannerSchema);
export default scanner;
