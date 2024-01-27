import { PathLike, readFileSync } from "fs";

export const getNumberOfWords = (path: PathLike) => {
    const data = readFileSync(path, 'utf8');
    const answer = data.trim().split(/\s+/).length;
    return answer;
};