import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig, ThunkExtraArg} from "../../../../app/providers/StoreProvider";


export const fetchMoviePicture = createAsyncThunk<
    string,
    string,
    ThunkConfig<string>
>(
    'movieDetails/fetchMoviePicture',
    async (poster_path: string, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response: AxiosResponse<any> =
                await (extra as ThunkExtraArg).imageApi!.get(`/w500${poster_path}`);

            return response.data;
        } catch (e) {
            return rejectWithValue("The movie picture failed to load");
        }
    });