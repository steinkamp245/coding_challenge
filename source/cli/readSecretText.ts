import { readFile } from "fs";
import { promisify } from "util";

const readFilePromise = promisify(readFile);

export async function readSecretFile(path:string) {
    const sentence = await readFilePromise(path);
    
    return sentence.toString()
}
