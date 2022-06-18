import {ImportOptions} from "../ImportOptions";

export type DataContext = {
    import: {
        uri(uri: string, options?: ImportOptions): Promise<void>;
        raw(text: string, options?: ImportOptions): Promise<void>;
    },
    export: {
        insomnia(options?: {
            includePrivate?: boolean,
            format?: 'json' | 'yaml',
        }): Promise<string>;
        har(options?: { includePrivate?: boolean }): Promise<string>;
    }
}
