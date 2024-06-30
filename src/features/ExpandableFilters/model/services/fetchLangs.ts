import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {Language} from "../types/ExpandableFiltersSchema";
import {ThunkConfig, ThunkExtraArg} from "../../../../app/providers/StoreProvider";
import {$getLanguages} from "../../../../shared/api/endpoints";


export const fetchLangs = createAsyncThunk<
    Array<Language>,
    void,
    ThunkConfig<string>
>(
    'expandableFilters/fetchLangs',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response: AxiosResponse<Array<Language>> =
                await (extra as ThunkExtraArg).api.get($getLanguages);

            return response.data;
        } catch (e) {
            return rejectWithValue("Error while fetching languages");
        }
    });