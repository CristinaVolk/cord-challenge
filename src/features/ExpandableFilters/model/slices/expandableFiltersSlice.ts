import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ExpandableFiltersSchema} from "../types/ExpandableFiltersSchema";
import {fetchGenres} from "../services/fetchGenres";
import {fetchLangs} from "../services/fetchLangs";

const initialState: ExpandableFiltersSchema = {
    isLoading: false,
    error: '',
    genreFilters: [],
    langsFilters: [],
    selectedFilters: {
        genres: [],
        langs: []
    },
    selectedGenres: []
}

const expandableFiltersSlice = createSlice({
    name: 'expandableFiltersSlice',
    initialState,
    reducers: {
        setSelectedFilters: (state, action: PayloadAction<any>) => {
            state.selectedFilters = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.error = '';
                state.genreFilters = action.payload
                state.isLoading = false;
            })
            .addCase(fetchLangs.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchLangs.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchLangs.fulfilled, (state, action) => {
                state.error = '';
                state.langsFilters = action.payload
                state.isLoading = false;
            })
    },
});

export const {
    reducer: expandableFiltersReducer,
    actions: expandableFiltersActions,
} = expandableFiltersSlice;
