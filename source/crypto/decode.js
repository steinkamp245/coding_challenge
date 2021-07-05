"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSecret = void 0;
const buffer_1 = require("buffer");
const crypto_1 = require("crypto");
const path_1 = require("path");
const fs_1 = require("fs");
const zlib_1 = require("zlib");
const PROJECT_ROOT_PATH = path_1.join(__dirname, "..", "..");
const KEY_PATH = path_1.join(PROJECT_ROOT_PATH, "secret.key");
const AUTH_PATH = path_1.join(PROJECT_ROOT_PATH, "auth.txt");
const IV_PATH = path_1.join(PROJECT_ROOT_PATH, "iv.txt");
const SECRET_ENC_PATH = path_1.join(PROJECT_ROOT_PATH, "secret.enc");
const SECRET_PATH = path_1.join(PROJECT_ROOT_PATH, "secret.txt");
/* TODO: Diese Funktion könnte man noch async machen */
function decodeSecret() {
    const ALGO = "aes-256-gcm";
    const key = fs_1.readFileSync(KEY_PATH, "utf8").substr(0, 32);
    const auth = buffer_1.Buffer.from(fs_1.readFileSync(AUTH_PATH, "binary"), "binary");
    const iv = buffer_1.Buffer.from(fs_1.readFileSync(IV_PATH, "binary"), "binary");
    const decipher = crypto_1.createDecipheriv(ALGO, key, iv, { authTagLength: 16 });
    decipher.setAuthTag(auth);
    const input = fs_1.createReadStream(SECRET_ENC_PATH);
    const output = fs_1.createWriteStream(SECRET_PATH);
    input.pipe(decipher).pipe(zlib_1.createUnzip()).pipe(output);
}
exports.decodeSecret = decodeSecret;
