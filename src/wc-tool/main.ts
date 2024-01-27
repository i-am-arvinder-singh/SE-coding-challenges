import { PathLike } from 'fs';
import { getNumberOfBytes } from './read-bytes/ReadBytes';
import { getNumberOfLines } from './number-of-lines/GetNumberOfLines';
import { getNumberOfWords } from './number-of-words/GetNumberOfWords';

const TestPath: PathLike = 'src/wc-tool/test.txt';

export const main = async () => {
    const numberOfBytes = getNumberOfBytes(TestPath);
    const numberOfLine = getNumberOfLines(TestPath);
    const GetNumberOfWords = getNumberOfWords(TestPath);
    
    console.log(`Number of bytes: ${numberOfBytes}`);
    console.log(`Number of lines: ${numberOfLine}`);
    console.log(`Number of words: ${GetNumberOfWords}`);
}
