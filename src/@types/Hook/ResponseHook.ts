import {AppContext} from "../Context/AppContext";
import {ResponseContext} from "../Context/ResponseContext";
import {DataContext} from "../Context/DataContext";
import {NetworkContext} from "../Context/NetworkContext";
import {StoreContext} from "../Context/StoreContext";

export type ResponseHook = {
    app: AppContext;
    data: DataContext;
    network: NetworkContext;
    response: ResponseContext;
    store: StoreContext;
}
