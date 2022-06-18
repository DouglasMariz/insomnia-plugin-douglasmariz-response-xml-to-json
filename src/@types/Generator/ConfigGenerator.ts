export type ConfigGenerator = {
    label: string;
    docsLink?: string;
    generate: (spec: {
        contents: Record<string, any>;
        rawContents: string;
        format: string;
        formatVersion: string;
    }) => Promise<{
        document?: string;
        error?: string;
    }>;
}
