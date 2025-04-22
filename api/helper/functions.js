import { pbkdf2Sync, randomBytes, timingSafeEqual } from "crypto";

// Constants
const iterations = 100000;
const keylen = 64;
const digest = "sha512";

// Hash the password
const hashPassword = async (password) => {
	const salt = randomBytes(16).toString("hex");
	const derivedKey = pbkdf2Sync(
		password,
		salt,
		iterations,
		keylen,
		digest,
	).toString("hex");
	return `${iterations}:${salt}:${derivedKey}`;
};

// Verify the password
const matchPassword = async (password, storedHash) => {
	const [storedIterations, salt, storedDerivedKey] = storedHash.split(":");
	const derivedKey = pbkdf2Sync(
		password,
		salt,
		parseInt(storedIterations),
		keylen,
		digest,
	).toString("hex");

	// Use timingSafeEqual to prevent timing attacks
	const isMatch = timingSafeEqual(
		Buffer.from(derivedKey, "hex"),
		Buffer.from(storedDerivedKey, "hex"),
	);

	return isMatch;
};

export { hashPassword, matchPassword };
