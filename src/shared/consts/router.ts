import {AppRoutes} from "../types/router";

export const getRouteHome = () => '/';
export const getRouteDiscover = () => '/discover';
export const getRouteWatched = () => '/watched';
export const getRouteSaved = () => `/saved`;

export const AppRouterByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteDiscover()]: AppRoutes.DISCOVER,
    [getRouteWatched()]: AppRoutes.WATCHED,
    [getRouteSaved()]: AppRoutes.SAVED,
};
