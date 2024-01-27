import { PathLike, readFileSync } from "fs";

export const getNumberOfBytes = (path: PathLike) => {
    const data = readFileSync(path);
    return data.length;
};