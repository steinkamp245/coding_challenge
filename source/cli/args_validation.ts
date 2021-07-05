interface CLIArguments  {
    name: string;
    info_text_short: string;
    info_text_long: string;
};

export interface MappedCLIArguments {
    key: string;
    value: string;
}

interface MappedArgs {
    x?: string;
    y?: string;
}

const availableArguments: CLIArguments[] = [
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

export function parseCLIArguments() {
    const args = process.argv.splice(2);
    const mappedCLIArguments: MappedCLIArguments[] = args.map(str => {
        const re = str.match(/\-\-([a-zA-Z]+)\=(.+)/);    
        if(!re) {
            console.log("The given argument is invalid\n", str);
            process.exit();
        }
        return {key: re[1], value: re[2]};
    });
    validateArguments(mappedCLIArguments);
    return mapCliArguments(mappedCLIArguments);

}

function mapCliArguments(mappedCLIArguments: MappedCLIArguments[]) {
    const obj: MappedArgs = {};
    mappedCLIArguments.forEach(mappedCLIArguments => {
        obj[mappedCLIArguments.key] = mappedCLIArguments.value;
    });
    return obj;
}


function validateArguments(mappedCLIArguments: MappedCLIArguments[]) {
    const validKeys = availableArguments.map(cliArgument => cliArgument.name);
    mappedCLIArguments.forEach(mappedCLIArguments => {
        if(!validKeys.includes(mappedCLIArguments.key)) {
            console.log("The given argument is invalid\n", mappedCLIArguments.key);
            process.exit();
        }
    });
}

