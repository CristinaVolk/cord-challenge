import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig, ThunkExtraArg} from "../../../../app/providers/storeProvider/config/StateSchema";
import {Genre, GetFiltersGenresResponse} from "../types/ExpandableFiltersSchema";
import {$getGenres} from "../../../../shared/api/endpoints";


export const fetchGenres = createAsyncThunk<
    Array<Genre>,
    void,
    ThunkConfig<string>
>(
    'expandableFilters/fetchGenres',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response: AxiosResponse<GetFiltersGenresResponse> =
                await (extra as ThunkExtraArg).api.get($getGenres, {
                    params: {
                        language: 'en'
                    },
                });

                return response.data.genres;
        } catch (e) {
            return rejectWithValue("Error while fetching genres");
        }
    });