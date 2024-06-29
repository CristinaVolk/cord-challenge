import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {ThunkConfig, ThunkExtraArg} from "../../../../app/providers/storeProvider/config/StateSchema";


export const fetchMoviePicture = createAsyncThunk<
    string,
    string,
    ThunkConfig<string>
>(
    'movieDetails/fetchMoviePicture',
    async (backdropPath: string, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response: AxiosResponse<any> =
                await (extra as ThunkExtraArg).imageApi!.get(`/w500/${backdropPath}`);

            return response.data;

        } catch (e) {
            return rejectWithValue("Error while fetching movie picture");
        }
    });