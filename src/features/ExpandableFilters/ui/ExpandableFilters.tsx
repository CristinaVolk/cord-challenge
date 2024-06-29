import {useEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {useSelector} from "react-redux";

import {ExpandableFiltersMobile} from "./ExpandableFiltersMobile";
import {ExpandableFiltersBrowser} from "./ExpandableFiltersBrowser";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";

import {fetchGenres} from "../model/services/fetchGenres";
import {fetchLangs} from "../model/services/fetchLangs";
import {
    getExpandableFiltersError,
    getExpandableFiltersLoading,
} from "../model/selectors/getExpandableFilters";
import {Error} from "../../../shared/UI/Error/ui/Error";


export const ExpandableFilters = () => {
    const isLoading = useSelector(getExpandableFiltersLoading)
    const dispatch = useAppDispatch()
    const error = useSelector(getExpandableFiltersError)

    useEffect(()=> {
        // @ts-ignore
        dispatch(fetchGenres())
        // @ts-ignore
        dispatch(fetchLangs())
    }, [dispatch])

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <Error message={error} />
    }

    return (
        <>
            <BrowserView>
                <ExpandableFiltersBrowser />
            </BrowserView>

            <MobileView>
               <ExpandableFiltersMobile />
            </MobileView>
        </>
    )
}