import messages from "./resources/messages.js";

const getMessage = (code, defaultcode) => (messages[code] ? messages[code] : messages[defaultcode]);

const getErrorMessage = (code, defaultcode) => getMessage(code, defaultcode);

const error = (res, code = "", statusCode = 400) => {
    const resData = {
        error: true,
        message: getMessage(code, "DEFAULT"),
        statusCode: statusCode,
        messageCode: code,
    };
    return res.status(statusCode).json(resData);
};

const success = (res, code = "", statusCode = 200, data = {}, message = getMessage(code, "DEFAULT")) => {
    const resData = {
        error: false,
        message: message,
        statusCode: statusCode,
        messageCode: code,
        data,
    };
    return res.status(statusCode).json(resData);
};

const customSuccess = (res, response) => res.status(200).json(response);

const customResponse = (res, code = "", statusCode = 200, data = {}, message = getMessage(code, "DEFAULT")) => {
    const resData = {
        error: true,
        message: message,
        statusCode: statusCode,
        messageCode: code,
        data,
    };
    return res.status(statusCode).json(resData);
};

const CustomError = (res, code = "", statusCode = 400, data = {}, message = getMessage(code, "DEFAULT")) => {
    const resData = {
        error: true,
        message: message,
        statusCode: statusCode,
        messageCode: code,
        data,
    };
    return res.status(statusCode).json(resData);
};

const notFound = (res, code, statusCode = 404) => {
    const resData = {
        error: true,
        statusCode: statusCode,
        message: getMessage(code, "DEFAULTER") || "Invalid request data",
        data: {},
        messageCode: code,
    };
    return res.status(statusCode).send(resData);
};

const unAuthentication = (res, data, code = "", statusCode = 401) => {
    const resData = {
        error: true,
        statusCode: statusCode,
        message: getMessage(code, "DEFAULT_AUTH"),
        data,
        messageCode: code ? code : "DEFAULT_AUTH",
    };
    return res.status(statusCode).send(resData);
};

export { getMessage, getErrorMessage, error, success, customSuccess, customResponse, CustomError, notFound, unAuthentication };
