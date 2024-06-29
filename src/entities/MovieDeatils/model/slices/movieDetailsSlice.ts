import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieDetailsSchema} from "../types/MovieDetails";
import {fetchMoviePicture} from "../services/fetchMoviePicture";


const initialState: MovieDetailsSchema = {
    isLoading: false,
    error: '',
    picturePath: '',
}

const movieDetailsSlice = createSlice({
    name: 'movieDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviePicture.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchMoviePicture.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchMoviePicture.fulfilled, (state, action) => {
                state.error = '';
                state.picturePath = action.payload
                state.isLoading = false;
            })
    },
});

export const {
    reducer: movieDetailsReducer,
    actions: movieDetailsActions,
} = movieDetailsSlice;
