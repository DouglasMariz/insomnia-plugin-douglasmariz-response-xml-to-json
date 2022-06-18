import {RequestBody} from "../RequestBody";

export type RequestContext = {
    getId(): string;
    getName(): string;
    getUrl(): string;
    setUrl(url: string): void;
    getMethod(): string;
    setMethod(method: string): void;
    getHeaders(): Array<{ name: string, value: string }>;
    getHeader(name: string): string | null;
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
    setHeader(name: string, value: string): void;
    addHeader(name: string, value: string): void;
    getParameter(name: string): string | null;
    getParameters(): Array<{ name: string, value: string }>;
    setParameter(name: string, value: string): void;
    hasParameter(name: string): boolean;
    addParameter(name: string, value: string): void;
    removeParameter(name: string): void;
    getBody(): RequestBody;
    setBody(body: RequestBody): void;
    getEnvironmentVariable(name: string): any;
    getEnvironment(): Object;
    setAuthenticationParameter(name: string, value: string): void;
    getAuthentication(): Object;
    setCookie(name: string, value: string): void;
    settingSendCookies(enabled: boolean): void;
    settingStoreCookies(enabled: boolean): void;
    settingEncodeUrl(enabled: boolean): void;
    settingDisableRenderRequestBody(enabled: boolean): void;
    settingFollowRedirects(enabled: boolean): void;
}
