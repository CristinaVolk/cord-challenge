import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {StateSchema, ThunkConfig, ThunkExtraArg} from "../../../../app/providers/storeProvider/config/StateSchema";
import {getMoviesListSearch, getMoviesListYear} from "../selectors/getMoviesListSelector";
import {GetMovieListResponse} from "../types/MoviesList";
import {$searchMovies} from "../../../../shared/api/endpoints";
import {MovieDetails} from "../../../MovieDeatils/model/types/MovieDetails";


export const fetchMovies = createAsyncThunk<
    Array<MovieDetails>,
    ThunkConfig<string>
>(
    'moviesList/fetchMovies',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const search = getMoviesListSearch(getState() as StateSchema);
        const year = getMoviesListYear(getState() as StateSchema);

        try {
            const response: AxiosResponse<GetMovieListResponse> =
                await (extra as ThunkExtraArg).api.get($searchMovies, {
                    params: {
                        query: search,
                        year,
                        include_adult: false,
                        page: 1
                    },
                });

            return response && response.data ? response.data.results : rejectWithValue("Error while fetching the data");
        } catch (e) {
            return rejectWithValue("Error while making request");
        }
    }
);