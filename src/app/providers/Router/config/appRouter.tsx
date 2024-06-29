import {createBrowserRouter} from "react-router-dom";

import {DiscoverPage} from "../../../../pages/Discover";
import {Layout} from "../../../../layouts/Layout";
import {WatchedPage} from "../../../../pages/Watched";
import {SavedPage} from "../../../../pages/Saved";
import {getRouteDiscover, getRouteHome, getRouteSaved, getRouteWatched} from "../../../../shared/consts/router";


export const appRouter = createBrowserRouter([
    {
        path: getRouteHome(),
        Component: Layout,
        children: [
            {
                path: getRouteDiscover(),
                Component: DiscoverPage,
            },
            {
                path: getRouteWatched(),
                Component: WatchedPage,
            },
            {
                path: getRouteSaved(),
                Component: SavedPage,
            },
        ],
    },
]);