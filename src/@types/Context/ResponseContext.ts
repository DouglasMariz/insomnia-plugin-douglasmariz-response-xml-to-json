import {ReadableStream} from "stream/web";

export type ResponseContext = {
    getRequestId(): string;
    getStatusCode(): number;
    getStatusMessage(): string;
    getBytesRead(): number;
    getTime(): number;
    getBody(): BufferConstructor | null;
    getBodyStream(): ReadableStream;
    // @ts-ignore
    setBody(body: Buffer);
    getHeader(name: string): string | Array<string> | null;
    getHeaders(): Array<{ name: string, value: string }> | undefined;
    hasHeader(name: string): boolean,
}
