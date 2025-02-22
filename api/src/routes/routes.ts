import { Request, Response, NextFunction } from "express";

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Set CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(204); // Respond to OPTIONS request with a 204 status
    }

    next();
};

export const home = (req: Request, res: Response) => {
    res.status(200).json({ success: true, statusCode: 200, message: "Welcome to the API Crafted by yours truly Tejus" });
};

export const ping = (req: Request, res: Response) => {
    res.status(200).json({ success: true, statusCode: 200, message: "Pong" });
};

export const notFound = (req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Not Found", statusCode: 404, url: req.originalUrl, method: req.method });
};
