export type AppContext = {
    getInfo(): { version: string, platform: string };
    alert(title: string, message?: string): Promise<void>;

    dialog(title: string, body: HTMLElement, options?: {
        onHide?: () => void;
        tall?: boolean;
        skinny?: boolean;
        wide?: boolean;
    }): void;

    prompt(title: string, options?: {
        label?: string;
        defaultValue?: string;
        submitName?: string;
        cancelable?: boolean;
    }): Promise<string>;

    getPath(name: string): string;

    showSaveDialog(options?: {
        defaultPath?: string;
    }): Promise<string | null>;

    clipboard: {
        readText(): string;
        writeText(text: string): void;
        clear(): void;
    };
}
