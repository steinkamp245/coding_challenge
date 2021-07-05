#!/usr/bin/env node

import { parseCLIArguments } from "./cli/args_validation";
import { readSecretFile } from "./cli/readSecretText";
import { findSentenceByNumber, findWordByNumber } from "./cli/text_utils";
import { decodeSecret } from "./crypto/decode";


async function main() {
    const mappedCLIArguments = parseCLIArguments();
    decodeSecret();
    const testString = await readSecretFile("./secret_mock.txt");
    const sentence = findSentenceByNumber(testString, Number(mappedCLIArguments.x));
    const result = findWordByNumber(sentence, Number(mappedCLIArguments.y));
    console.log(result);
}

main();







