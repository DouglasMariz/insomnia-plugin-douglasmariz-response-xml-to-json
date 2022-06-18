import {RequestBodyParameter} from "./RequestBodyParameter";

export type RequestBody = {
    mimeType?: string;
    text?: string;
    fileName?: string;
    params?: RequestBodyParameter[];
}
