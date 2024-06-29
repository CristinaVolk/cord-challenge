import {createBrowserRouter} from "react-router-dom";
import {DiscoverPage} from "../../../pages/Discover/ui/DiscoverPage";
import {Layout} from "../../../layouts/Layout/Layout";
import {WatchedPage} from "../../../pages/Watched/ui/WatchedPage";
import {SavedPage} from "../../../pages/Saved/ui/SavedPage";
import {getRouteDiscover, getRouteHome, getRouteSaved, getRouteWatched} from "../../../shared/consts/router";


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