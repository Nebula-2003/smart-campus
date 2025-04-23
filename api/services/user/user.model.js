import mongoose from "mongoose";
import softDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, collection: "user" },
);

userSchema.plugin(softDelete, { overrideMethods: "all" });
const User = mongoose.model("user", userSchema);

export default User;
