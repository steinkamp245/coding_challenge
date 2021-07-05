"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readSecretFile = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
const readFilePromise = util_1.promisify(fs_1.readFile);
async function readSecretFile(path) {
    const sentence = await readFilePromise(path);
    return sentence.toString();
}
exports.readSecretFile = readSecretFile;
