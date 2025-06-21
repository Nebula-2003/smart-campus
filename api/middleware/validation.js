export const validation = {
    body: (schema) => {
        return (req, res, next) => {
            const result = schema.safeParse(req.body, { abortEarly: true });

            if (!result.success) {
                const flattened = result.error.flatten();
                const firstMessage = Object.values(flattened.fieldErrors)[0]?.[0] || "Validation error";

                return res.status(400).json({
                    status: false,
                    message: firstMessage,
                    data: flattened.fieldErrors,
                });
            }

            req.body = result.data;
            next();
        };
    },

    query: (schema) => {
        return (req, res, next) => {
            const result = schema.safeParse(req.query, { abortEarly: true });

            if (!result.success) {
                const flattened = result.error.flatten();
                const firstMessage = Object.values(flattened.fieldErrors)[0]?.[0] || "Validation error";

                return res.status(400).json({
                    status: false,
                    message: firstMessage,
                    data: flattened.fieldErrors,
                });
            }

            req.params = result.data;
            next();
        };
    },

    params: (schema) => {
        return (req, res, next) => {
            const result = schema.safeParse(req.params, { abortEarly: true });

            if (!result.success) {
                const flattened = result.error.flatten();
                const firstMessage = Object.values(flattened.fieldErrors)[0]?.[0] || "Validation error";

                return res.status(400).json({
                    status: false,
                    message: firstMessage,
                    data: flattened.fieldErrors,
                });
            }

            req.params = result.data;
            next();
        };
    },

    headers: (schema) => {
        return (req, res, next) => {
            const result = schema.safeParse(req.headers, { abortEarly: true });

            if (!result.success) {
                const flattened = result.error.flatten();
                const firstMessage = Object.values(flattened.fieldErrors)[0]?.[0] || "Validation error";

                return res.status(400).json({
                    status: false,
                    message: firstMessage,
                    data: flattened.fieldErrors,
                });
            }

            req.headers = result.data;
            next();
        };
    },
};
