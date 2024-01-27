import { PathLike } from "fs";
import { executeWCByteReadCommand } from "../wc-cli-command/wcCommandProgram";
import { getNumberOfBytes } from "./ReadBytes";

describe("readBytes", () => {
  const TestPath: PathLike = "src/wc-tool/test.txt";

  const command = `wc -c ${TestPath}`;
  it("should read the number of bytes in a file", async () => {
    const fromWCCommand = await executeWCByteReadCommand(command);
    const actualValue = getNumberOfBytes(TestPath).toString();

    if (fromWCCommand.stderr) throw new Error(fromWCCommand.stderr.toString());
    
    const expectedValue = fromWCCommand.stdout.split(' ')[2];

    expect(actualValue).toEqual(expectedValue);
  });
});
