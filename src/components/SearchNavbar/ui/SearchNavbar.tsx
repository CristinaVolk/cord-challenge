import {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {getMoviesListSearch, getMoviesListYear} from "../../MoviesList/model/selectors/getMoviesListSelector";
import {moviesListActions} from "../../MoviesList/model/slices/moviesListSlice";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {Icon} from "../../../shared/UI/Icon/Icon";
import {HStack, VStack} from "../../../shared/UI/Stack";
import classes from "./SearchNavbar.module.scss";
import {BrowserView, MobileView} from "react-device-detect";

export const SearchNavbar = () => {
    const searchTerm = useSelector(getMoviesListSearch)
    const movieYear = useSelector(getMoviesListYear)
    const dispatch = useAppDispatch();

    function onSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(moviesListActions.setSearch(event.target.value))
    }

    function onCalendarYearChange(event: any) {
        dispatch(moviesListActions.setYear(event.target.value))
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
                        />
                    </HStack>

                    <HStack gap='10' className={classes.inputWrapper}>
                        <Icon width={24} height={24} src='assets/icons/year-icon.png' />
                        <input
                            value={movieYear}
                            onChange={onCalendarYearChange}
                            placeholder="Year of release"
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
                    />
                </HStack>
            </MobileView>
        </>
    )
}