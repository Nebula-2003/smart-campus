import { randomBytes, pbkdf2 } from "crypto";
import { promisify } from "util";

const pbkdf2Promise = promisify(pbkdf2);

async function hashPassword(password: string): Promise<{ salt: string; hash: string }> {
    const salt = randomBytes(16).toString("hex");
    const hash = await pbkdf2Promise(password, salt, 1000, 64, "sha512");
    return { salt, hash: hash.toString("hex") };
}

async function verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
    const hashToVerify = await pbkdf2Promise(password, salt, 1000, 64, "sha512");
    return hash === hashToVerify.toString("hex");
}

export { hashPassword, verifyPassword };
