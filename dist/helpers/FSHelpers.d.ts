export declare namespace FSHelpers {
    const CONFIG_FILE_NAME = "vladnet.json";
    const readJSONFromFile: (filename: string) => any;
    const findPathUpSync: (filename: string, workdir?: string) => string;
}
