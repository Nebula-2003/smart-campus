import mongoose from "mongoose";
import softDelete from 'mongoosejs-soft-delete';

const { Schema } = mongoose;

const usersSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: false,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    role: {
        type: String,
        enum: ["admin", "landlord", "tenant"],
        default: "tenant",
        required: false,
    },
    otp: {
        type: Number,
        required: false,
        default: 0
    },
    fcm_token: {
        type: String,
        required: false,
        default: ""
    },
    device_type: {
        type: String,
        enum: ["android", "ios"],
        default: "android",
        required: false
    },
    device_id: {
        type: String,
        required: false,
        default: ""
    },
    is_notification_on: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        enum: ["verified", "pending", "deactivated"],
        default: "pending",
        required: false,
    }
}, { timestamps: true});

usersSchema.plugin(softDelete);

const Users = mongoose.model("Users", usersSchema);

export default Users;
