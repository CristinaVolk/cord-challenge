import {TestAsyncThunk} from "../../../../shared/helpers/tests/testAsyncThunk";
import {fetchMovies} from "./fetchMovies";


describe('fetch movies', () => {
    test('failure', async () => {
        const thunk = new TestAsyncThunk(fetchMovies);
        thunk.api.get.mockReturnValue(Promise.resolve( 'network error'));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected')
    });
})
