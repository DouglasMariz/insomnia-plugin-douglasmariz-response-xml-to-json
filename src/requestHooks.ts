import {RequestHook} from "./@types/Hook/RequestHook";

export default async ({request, store}: RequestHook) => {
    const xml = request.getHeader('xml');
    if (xml === 'true') {
        await store.setItem('xml', xml);
    }
};
