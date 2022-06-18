import {AppContext} from "../Context/AppContext";
import {RequestContext} from "../Context/RequestContext";
import {DataContext} from "../Context/DataContext";
import {NetworkContext} from "../Context/NetworkContext";
import {StoreContext} from "../Context/StoreContext";

export type RequestHook = {
    app: AppContext;
    data: DataContext;
    network: NetworkContext;
    request: RequestContext;
    store: StoreContext;
};
