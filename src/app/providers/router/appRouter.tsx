import {createBrowserRouter} from "react-router-dom";
import {DiscoverPage} from "../../../pages/Discover/ui/DiscoverPage";
import {Layout} from "../../../components/Layout/Layout";
import {WatchedPage} from "../../../pages/Watched/ui/WatchedPage";
import {SavedPage} from "../../../pages/Saved/ui/SavedPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/discover",
                Component: DiscoverPage,
            },
            {
                path: "/watched",
                Component: WatchedPage,
            },
            {
                path: "/saved",
                Component: SavedPage,
            },
        ],
    },
]);