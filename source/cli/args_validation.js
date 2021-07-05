"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCLIArguments = void 0;
;
const availableArguments = [
    {
        name: "x",
        info_text_short: "Determines the x-th sentence in the text",
        info_text_long: "coming soon"
    },
    {
        name: "y",
        info_text_short: "Determines the y-th word in the x-th sentence",
        info_text_long: "coming soon"
    }
];
function parseCLIArguments() {
    const args = process.argv.splice(2);
    const mappedCLIArguments = args.map(str => {
        const re = str.match(/\-\-([a-zA-Z]+)\=(.+)/);
        if (!re) {
            console.log("The given argument is invalid\n", str);
            process.exit();
        }
        return { key: re[1], value: re[2] };
    });
    validateArguments(mappedCLIArguments);
    return mapCliArguments(mappedCLIArguments);
}
exports.parseCLIArguments = parseCLIArguments;
function mapCliArguments(mappedCLIArguments) {
    const obj = {};
    mappedCLIArguments.forEach(mappedCLIArguments => {
        obj[mappedCLIArguments.key] = mappedCLIArguments.value;
    });
    return obj;
}
function validateArguments(mappedCLIArguments) {
    const validKeys = availableArguments.map(cliArgument => cliArgument.name);
    mappedCLIArguments.forEach(mappedCLIArguments => {
        if (!validKeys.includes(mappedCLIArguments.key)) {
            console.log("The given argument is invalid\n", mappedCLIArguments.key);
            process.exit();
        }
    });
}
