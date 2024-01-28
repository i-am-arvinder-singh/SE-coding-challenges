import { exec } from 'child_process';

export const executeCommand = async (command: string) => {
    const options = { cwd: process.cwd() };
    try {
        const result = await new Promise<{ stdout: string, stderr: string }>((resolve, reject) => {
            exec(command, options, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve({ stdout, stderr });
            });
        });
        return result;
    } catch (error) {
        console.error(`##### exec error: ${error}`);
        return { stdout: '', stderr: error };
    }
}