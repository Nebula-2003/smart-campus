require("dotenv").config();

module.exports = {
	apps: [
		{
			name: "api-smart-campus",
			script: "./app.js",
			watch: true,
			ignore_watch: ["node_modules", "public", "logs"],
			env_local: {
				PORT: process.env.PORT || 8080,
				NODE_ENV: "local",
				DOMAIN_URL: "http://127.0.0.1:8080",
				DB_MONGO_URL: process.env.DB_MONGO_URL,
				JWT_SECRET: process.env.JWT_SECRET,
			},
		},
	],
};
