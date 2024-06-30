import {TestAsyncThunk} from "../../../../shared/helpers/tests/testAsyncThunk";
import {fetchMoviePicture} from "./fetchMoviePicture";

test('failure fetch movie picture', async () => {
    const postPathValue = 'xxx';

    const thunk = new TestAsyncThunk(fetchMoviePicture);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: postPathValue }));
    const result = await thunk.callThunk('');

    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
});