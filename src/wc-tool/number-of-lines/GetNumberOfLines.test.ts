import { PathLike } from "fs";
import { executeCommand } from "../wc-cli-command/CLICommand";
import { getNumberOfLines } from "./GetNumberOfLines";

describe("readLines", () => {
  const TestPath: PathLike = "src/wc-tool/test.txt";

  const command = `wc -l ${TestPath}`;
  it("should read the number of bytes in a file", async () => {
    const fromWCCommand = await executeCommand(command);
    const actualValue = getNumberOfLines(TestPath).toString();

    if (fromWCCommand.stderr) throw new Error(fromWCCommand.stderr.toString());
    
    const expectedValue = fromWCCommand.stdout.split(' ')[4];

    expect(actualValue).toEqual(expectedValue);
  });
});
