import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMoviesListSearch, getMoviesListYear} from "../selectors/getMoviesListSelector";
import {GetMovieListResponse} from "../types/MoviesList";
import {MovieDetails} from "../../../MovieDeatils";
import {$searchMovies} from "../../../../shared/api/endpoints";
import {StateSchema, ThunkConfig, ThunkExtraArg} from "../../../../app/providers/StoreProvider/config/StateSchema";


export const fetchMovies = createAsyncThunk<
    Array<MovieDetails>,
    void,
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