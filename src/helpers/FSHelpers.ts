// ------------------------------------------------------------
// File System Helpers
// ------------------------------------------------------------

import * as fs from "fs";
import * as path from "path";

export namespace FSHelpers {

    export const CONFIG_FILE_NAME = "vladnet.json";

    export const readJSONFromFile = (filename: string) => {
        const exists = fs.existsSync(filename);
        if (!exists) return null;
        const content = fs.readFileSync(filename).toString();
        let result;
        try {
            result = JSON.parse(content);
        }
        catch (err) {
            console.error("Fuck", err.stack);
            result = null;
        }
        return result;
    }

    export const findPathUpSync = (filename: string, workdir: string = process.cwd()): string | undefined => {

        workdir = path.normalize(workdir);

        const pathParts = workdir.split(path.sep);
        let currentDirname = workdir;
        let result: string;

        for (let i = 0; i < pathParts.length; i++) {
            const pathName = path.join(currentDirname, filename);
            if (fs.existsSync(pathName)) {
                result = path.join(currentDirname, filename);
                break;
            }
            currentDirname = path.dirname(currentDirname);
        }

        return result;
    };

}
