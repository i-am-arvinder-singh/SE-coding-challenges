import { PathLike } from 'fs';
import { getNumberOfBytes } from './read-bytes/ReadBytes';

const TestPath: PathLike = 'src/wc-tool/test.txt';

export const main = async () => {
    const numberOfBytes = getNumberOfBytes(TestPath);
    console.log(`Number of bytes: ${numberOfBytes}`);
}
