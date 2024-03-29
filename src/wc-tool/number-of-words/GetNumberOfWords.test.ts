import { PathLike } from "fs";
import { executeCommand } from "../wc-cli-command/CLICommand";
import { getNumberOfWords } from "./GetNumberOfWords";

describe("readWords", () => {
  const TestPath: PathLike = "src/wc-tool/test.txt";

  const command = `wc -w ${TestPath}`;
  it("should read the number of bytes in a file", async () => {
    const fromWCCommand = await executeCommand(command);
    const actualValue = getNumberOfWords(TestPath).toString();

    if (fromWCCommand.stderr) throw new Error(fromWCCommand.stderr.toString());
    
    const expectedValue = fromWCCommand.stdout.split(' ')[3];

    expect(actualValue).toEqual(expectedValue);
  });
});
