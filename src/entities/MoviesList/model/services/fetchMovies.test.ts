import {TestAsyncThunk} from "../../../../shared/helpers/tests/testAsyncThunk";
import {fetchMovies} from "./fetchMovies";

const mockedMovies = [
    {
        adult: true,
        backdrop_path: 'xxx',
        genre_ids: [1,2,3],
        id: 1111,
        original_language: 'en',
        original_title: 'Bad Teacher',
        overview: 'string',
        popularity: 1,
        poster_path: 'string',
        release_date: '01-01-2019',
        title: 'Bad Teacher',
        video: false,
        vote_average: 2,
        vote_count: 2,
    }
]

describe('fetch movies', () => {
    test('failure', async () => {
        const thunk = new TestAsyncThunk(fetchMovies);
        thunk.api.get.mockResolvedValueOnce(Promise.reject( 'network error'));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
    });
})
