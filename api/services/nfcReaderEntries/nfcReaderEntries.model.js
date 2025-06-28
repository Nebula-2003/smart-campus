import mongoose from "mongoose";
import softDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const nfcReaderEntrySchema = new Schema(
    {
        entryTime: { type: Date, default: Date.now },
        nfcTag: { type: String, required: true },
        scanner: { type: String, ref: "scanner", required: true },
    },
    { collection: "nfcReaderEntries" },
);

nfcReaderEntrySchema.index({ entryTime: 1 }); // for time-based queries
nfcReaderEntrySchema.plugin(softDelete, { overrideMethods: "all" });

const nfcReaderEntry = mongoose.model("nfcReaderEntry", nfcReaderEntrySchema);
export default nfcReaderEntry;
