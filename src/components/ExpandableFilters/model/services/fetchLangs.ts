import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "../../../../app/providers/storeProvider/config/StateSchema";
import {Language} from "../types/ExpandableFiltersSchema";
import {$getLanguages} from "../../../../shared/api/endpoints";


export const fetchLangs = createAsyncThunk(
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