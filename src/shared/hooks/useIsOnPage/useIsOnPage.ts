import {useLocation} from "react-router-dom";

export function useIsOnPage (pageUrl: string) : boolean {
    const {pathname} = useLocation();
    return pathname === pageUrl;
}