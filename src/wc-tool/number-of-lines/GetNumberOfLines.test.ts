import { PathLike } from "fs";
import { executeWCByteReadCommand } from "../wc-cli-command/wcCommandProgram";
import { getNumberOfLines } from "./GetNumberOfLines";

describe("readBytes", () => {
  const TestPath: PathLike = "src/wc-tool/test.txt";

  const command = `wc -l ${TestPath}`;
  it("should read the number of bytes in a file", async () => {
    const fromWCCommand = await executeWCByteReadCommand(command);
    const actualValue = getNumberOfLines(TestPath).toString();

    if (fromWCCommand.stderr) throw new Error(fromWCCommand.stderr.toString());
    
    const expectedValue = fromWCCommand.stdout.split(' ')[4];

    expect(actualValue).toEqual(expectedValue);
  });
});
