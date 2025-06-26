import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const scannerSchema = new Schema(
    {
        name: { type: String, required: true },
        macAddress: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true, collection: "scanners" },
);

scannerSchema.plugin(softDelete, { overrideMethods: "all" });

const scanner = mongoose.model("scanners", scannerSchema);
export default scanner;
