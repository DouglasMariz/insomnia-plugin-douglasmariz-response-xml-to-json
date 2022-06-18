import {xml2json} from 'xml-js';
import {ResponseHook} from "./@types/Hook/ResponseHook";

export default async ({response, store}: ResponseHook) => {
    const responseBody = <string>response.getBody()?.toString();
    const xml = await store.getItem('xml');
    if (xml === 'true') {
        await store.removeItem('xml');
        const textJson = xml2json(responseBody, {compact: true, spaces: 4});
        // @ts-ignore
        response.setBody(Buffer.from(textJson));
    }
};
