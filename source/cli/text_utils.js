"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWordByNumber = exports.findSentenceByNumber = void 0;
function findSentenceByNumber(text, sentenceCount) {
    return text.split(". ")[sentenceCount - 1];
}
exports.findSentenceByNumber = findSentenceByNumber;
function findWordByNumber(sentence, wordCount) {
    return sentence.split(" ")[wordCount - 1];
}
exports.findWordByNumber = findWordByNumber;
