import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MoviesListSchema} from "../types/MoviesList";
import {MovieDetails} from "../../../MovieDeatils";
import {fetchMovies} from "../services/fetchMovies";

const initialState: MoviesListSchema = {
    isLoading: false,
    error: '',
    movies: [],
    search: undefined,
    year: undefined,
}

const moviesListSlice = createSlice({
    name: 'moviesListSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<MovieDetails[]>) => {
            state.movies = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.year = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.error = '';
                state.movies = action.payload
                state.isLoading = false;
            })
    },
});

export const {
    reducer: moviesListReducer,
    actions: moviesListActions,
} = moviesListSlice;
