#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_validation_1 = require("./cli/args_validation");
const readSecretText_1 = require("./cli/readSecretText");
const text_utils_1 = require("./cli/text_utils");
const decode_1 = require("./crypto/decode");
async function main() {
    const mappedCLIArguments = args_validation_1.parseCLIArguments();
    decode_1.decodeSecret();
    const testString = await readSecretText_1.readSecretFile("./secret_mock.txt");
    const sentence = text_utils_1.findSentenceByNumber(testString, Number(mappedCLIArguments.x));
    const result = text_utils_1.findWordByNumber(sentence, Number(mappedCLIArguments.y));
    console.log(result);
}
main();
