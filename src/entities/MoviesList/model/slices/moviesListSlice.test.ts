import {MoviesListSchema} from "../types/MoviesList";
import {moviesListActions, moviesListReducer} from "./moviesListSlice";
import {fetchMovies} from "../services/fetchMovies";
import {mockedMovies} from "../../../../shared/helpers/tests/mockedData";


describe('moviesListSlice.test', () => {
    test('with value', () => {
        const state: DeepPartial<MoviesListSchema> = {
            movies: mockedMovies,
        };

        expect(
            moviesListReducer(state as MoviesListSchema, moviesListActions.setMovies(mockedMovies)),
        ).toEqual({movies: mockedMovies});
    });

    test('pending state', () => {
        const state: DeepPartial<MoviesListSchema> = {
            isLoading: true,
        };
        const expectedState: DeepPartial<MoviesListSchema> = {
            isLoading: true,
            error: ""
        }

        expect(
            // @ts-ignore
            moviesListReducer(state as MoviesListSchema, fetchMovies.pending)
        ).toEqual(expectedState);
    });
});
