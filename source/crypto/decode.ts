import { Buffer } from "buffer";
import { createDecipheriv } from "crypto";
import { join } from "path";
import {
    createReadStream,
    createWriteStream,
    readFileSync,
} from "fs";
import { createUnzip } from "zlib";


const PROJECT_ROOT_PATH = join(__dirname, "..", "..");
const KEY_PATH = join(PROJECT_ROOT_PATH, "secret.key");
const AUTH_PATH = join(PROJECT_ROOT_PATH, "auth.txt");
const IV_PATH = join(PROJECT_ROOT_PATH, "iv.txt");
const SECRET_ENC_PATH = join(PROJECT_ROOT_PATH, "secret.enc");
const SECRET_PATH = join(PROJECT_ROOT_PATH, "secret.txt");

/* TODO: Diese Funktion könnte man noch async machen */
export function decodeSecret() {
    const ALGO = "aes-256-gcm";
    const key = readFileSync(KEY_PATH, "utf8").substr(0, 32);
    const auth = Buffer.from(readFileSync(AUTH_PATH, "binary"), "binary");
    const iv = Buffer.from(readFileSync(IV_PATH, "binary"), "binary");
    
    const decipher = createDecipheriv(ALGO, key, iv, { authTagLength: 16 });
    decipher.setAuthTag(auth);
    
    const input = createReadStream(SECRET_ENC_PATH);
    const output = createWriteStream(SECRET_PATH);
    
    input.pipe(decipher).pipe(createUnzip()).pipe(output);
}
