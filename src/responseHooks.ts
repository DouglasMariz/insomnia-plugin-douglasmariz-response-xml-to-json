import {xml2json} from 'xml-js';
import {ResponseHook} from "./@types/Hook/ResponseHook";

export default [
    ({response}: ResponseHook) => {
        const responseBody = <string>response.getBody()?.toString();
        const textJson = xml2json(responseBody, {compact: true, spaces: 4});
        // @ts-ignore
        response.setBody(Buffer.from(textJson));
    },
];
