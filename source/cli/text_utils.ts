export function findSentenceByNumber(text: string, sentenceCount: number) {
    return text.split(". ")[sentenceCount-1];
}

export function findWordByNumber(sentence: string, wordCount: number) {
    return sentence.split(" ")[wordCount-1];
}