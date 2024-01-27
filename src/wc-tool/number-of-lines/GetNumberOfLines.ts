import { PathLike, readFileSync } from "fs";

export const getNumberOfLines = (path: PathLike) => {
    const data = readFileSync(path, 'utf8');
    return data.split('').reduce((acc, char) => {
        if (char === '\n') return acc + 1;
        return acc;
    }, 0);
};