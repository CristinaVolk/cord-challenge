import {getRouteDiscover, getRouteSaved, getRouteWatched} from "../../../../shared/consts/router";
import {AppRoutes} from "../../../../shared/types/router";

export type SideBarItemType = {
    label: string,
    iconPath?: string
    iconAlt?: "arrow-icon" | "search-icon"
    path: string
    subitems?: SideBarItemType[]
}
export function getSideBarItems (): Array<SideBarItemType> {
    return [
        {
            label: AppRoutes.DISCOVER,
            iconPath: 'assets/icons/search-icon-yellow.png',
            iconAlt: 'search-icon',
            path: getRouteDiscover()
        },
        {
            label: AppRoutes.WATCHED,
            path: getRouteWatched(),
            subitems: [
                {label: 'Movies', path: '/watched/movies' },
                {label: "TV Shows", path: '/watched/shows'}
            ]
        },
        {
            label: AppRoutes.SAVED,
            path: getRouteSaved(),
            subitems: [
                {label: 'Movies', path: '/saved/movies'},
                {label: "TV Shows", path: '/saved/shows'}
            ]
        },
    ]
}