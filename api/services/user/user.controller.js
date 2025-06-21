import { hashPassword, matchPassword, mintJWT } from "../../helper/utils.js";
import { userCoreServices } from "./user.services.js";

export const create = async (req, res) => {
    try {
        const {
            firstName,
            middleName,
            lastName,
            gender,
            dob,
            email,
            password: unHashedPassword,
            address,
            contactNo,
            parentContactNo,
            semester,
            college,
            stream,
            branch,
            role,
        } = req.body;

        const hashedPassword = await hashPassword(unHashedPassword);
        const data = await userCoreServices.add({
            firstName,
            middleName,
            lastName,
            gender,
            dob: new Date(dob),
            email,
            password: hashedPassword,
            address,
            contactNo,
            parentContactNo,
            semester,
            college,
            stream,
            branch,
            role,
        });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "USER_CREATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const login = async (req, res) => {
    try {
        const user = await userCoreServices.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ code: "USER_NOT_FOUND", success: false, message: "User not found", data: {} });
        const isMatch = await matchPassword(req.body.password, user.password);
        if (!isMatch) return res.status(400).json({ code: "INVALID_PASSWORD", success: false, message: "Invalid password", data: {} });
        const { password: _password, ...userData } = user;
        return res.status(200).json({ code: "USER_GET", success: true, data: { ...userData, token: mintJWT(user) } });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const get = async (req, res) => {
    try {
        const data = await userCoreServices.findOne({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "USER_GET", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const list = async (req, res) => {
    try {
        const data = await userCoreServices.find({});
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "USER_LIST", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const update = async (req, res) => {
    try {
        const data = await userCoreServices.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "USER_UPDATE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};

export const remove = async (req, res) => {
    try {
        const data = await userCoreServices.findOneAndDelete({ _id: req.params.id });
        if (!data) return res.status(400).json({ code: "SERVER_ERROR", success: false, message: "Something went wrong, please try again", data: {} });
        return res.status(200).json({ code: "USER_DELETE", success: true, data });
    } catch (error) {
        return res.status(500).json({ code: "DEFAULT_INTERNAL_SERVER_ERROR", success: false, message: error.message, data: {} });
    }
};
