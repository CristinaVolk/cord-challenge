import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getMoviesListLoading = (state: StateSchema) => state.movies?.isLoading || false;
export const getMoviesListError = (state: StateSchema) => state.movies?.error || '';
export const getMoviesListMovies = (state: StateSchema) => state.movies?.movies || [];

export const getMoviesListSearch = (state: StateSchema) => state.movies?.search || '';
export const getMoviesListYear = (state: StateSchema) => state.movies?.year || '';
