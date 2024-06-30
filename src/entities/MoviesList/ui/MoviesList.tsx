import React, {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";

import {
    getMoviesListError, getMoviesListLoading,
    getMoviesListMovies,
    getMoviesListSearch,
    getMoviesListYear
} from "../model/selectors/getMoviesListSelector";
import {fetchMovies} from "../model/services/fetchMovies";

import {MovieDetailsCard} from "../../MovieDeatils";
import {MovieDetails} from "../../MovieDeatils";

import {getExpandableFiltersSelected} from "../../../features/ExpandableFilters";

import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useDebounce} from "../../../shared/hooks/useDebounce/useDebounce";
import {VStack} from "../../../shared/UI/Stack";
import {Error} from '../../../shared/UI/Error/ui/Error'


export const MoviesList = () => {
    const searchTerm = useSelector(getMoviesListSearch)
    const year = useSelector(getMoviesListYear)
    const movies = useSelector(getMoviesListMovies)
    const selectedFilters = useSelector(getExpandableFiltersSelected)
    const error = useSelector(getMoviesListError);
    const isLoading = useSelector(getMoviesListLoading);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        // @ts-ignore
        dispatch(fetchMovies())
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 1000)

    useEffect(() => {
        // @ts-ignore
        debouncedFetch()
    }, [dispatch, searchTerm, year, selectedFilters])


    function filterBy(moviesArray: Array<MovieDetails>, category: string) {
        if (selectedFilters[category as (keyof typeof selectedFilters)].length === 0) {
            return moviesArray;
        }
        if (category === 'langs') {
            return moviesArray.filter(movie => selectedFilters[category].indexOf(movie.original_language) !== -1)
        } else {
            return moviesArray
                .filter(movie =>
                    selectedFilters[category as keyof typeof selectedFilters]
                        .some(genreId => movie
                            .genre_ids.indexOf(Number(genreId)) !== -1)
                )
        }
    }

    function renderFiltered(movies : Array<MovieDetails>) {
        let filtered = [...movies];
        for (const filteredKey in selectedFilters) {
            filtered = filterBy(filtered, filteredKey)
        }

        return filtered
    }

    const content = movies.length &&
            renderFiltered(movies).map(movie => (
                <MovieDetailsCard movie={movie} key={movie.id} />
            ))

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (content) {
        return (
            <VStack gap='15'>
                {content}
            </VStack>
        )
    }

    return (
         <h1>
             No movies found...
             Try typing in the search box
             {error && <Error message={error}></Error>}
         </h1>
    )
}