import {AppContext} from "../Context/AppContext";
import {ResponseContext} from "../Context/ResponseContext";

export type ResponseHook = {
    app: AppContext;
    response: ResponseContext;
}
