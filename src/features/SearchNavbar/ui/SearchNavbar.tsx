import React, {ChangeEvent, useEffect} from "react";
import {useSelector} from "react-redux";
import {BrowserView, MobileView} from "react-device-detect";

import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {Icon} from "../../../shared/UI/Icon/Icon";
import {HStack, VStack} from "../../../shared/UI/Stack";
import {getRouteDiscover} from "../../../shared/consts/router";
import {useIsOnPage} from "../../../shared/hooks/useIsOnPage/useIsOnPage";

import {moviesListActions} from "../../../entities/MoviesList";
import {
    getMoviesListSearch,
    getMoviesListYear
} from "../../../entities/MoviesList";

import classes from "./SearchNavbar.module.scss";


export const SearchNavbar = () => {
    const searchTerm = useSelector(getMoviesListSearch)
    const movieYear = useSelector(getMoviesListYear)
    const dispatch = useAppDispatch();
    const shouldInputBeDisabled = !useIsOnPage(getRouteDiscover())

    useEffect(() => {
        clearInputs()
    }, [shouldInputBeDisabled])

    function onSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(moviesListActions.setSearch(event.target.value))
    }

    function onCalendarYearChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(moviesListActions.setYear(event.target.value))
    }

    function clearInputs() {
        dispatch(moviesListActions.setSearch(''))
        dispatch(moviesListActions.setYear(''))
    }

    return (
        <>
            <BrowserView>
                <VStack gap='10' className={classes.SearchNavbar}>
                    <HStack gap='10' className={classes.inputWrapper}>
                        <Icon width={24} height={24} src='assets/icons/search-icon-yellow.png' />
                        <input
                            value={searchTerm}
                            onChange={onSearchTermChange}
                            disabled={shouldInputBeDisabled}
                        />
                    </HStack>

                    <HStack gap='10' className={classes.inputWrapper}>
                        <Icon width={24} height={24} src='assets/icons/year-icon.png' />
                        <input
                            value={movieYear}
                            onChange={onCalendarYearChange}
                            placeholder="Year of release"
                            disabled={shouldInputBeDisabled}
                        />
                    </HStack>
                </VStack>
            </BrowserView>
            <MobileView>
                <HStack gap='10' className={classes.inputWrapper}>
                    <Icon width={24} height={24} src='assets/icons/search-icon-yellow.png' />
                    <input
                        value={searchTerm}
                        onChange={onSearchTermChange}
                        disabled={shouldInputBeDisabled}
                    />
                </HStack>
            </MobileView>
        </>
    )
}