import React, {useCallback, useEffect} from "react";
import {getMoviesListMovies, getMoviesListSearch, getMoviesListYear} from "../model/selectors/getMoviesListSelector";
import {useSelector} from "react-redux";
import {fetchMovies} from "../model/services/fetchMovies";
import {MovieDetailsCard} from "../../MovieDeatils/ui/MovieDetailsCard";
import {MovieDetails} from "../../MovieDeatils/model/types/MovieDetails";
import {getExpandableFiltersSelected} from "../../../features/ExpandableFilters/model/selectors/getExpandableFilters";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useDebounce} from "../../../shared/hooks/useDebounce/useDebounce";
import {VStack} from "../../../shared/UI/Stack";


export const MoviesList = () => {
    const searchTerm = useSelector(getMoviesListSearch)
    const year = useSelector(getMoviesListYear)
    const movies = useSelector(getMoviesListMovies)
    const dispatch = useAppDispatch();
    const selectedFilters = useSelector(getExpandableFiltersSelected)

    const fetchData = useCallback(() => {
        // @ts-ignore
        dispatch(fetchMovies())
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 2000)

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


    return (
        <VStack gap='15'>
            {movies.length
                ? content
                : <h1>
                    No movies found...
                    Try typing in the search box
                  </h1>
            }
        </VStack>
    )
}