import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $mainApi, $imageApi } from '../../../../shared/api/api';
import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';
import {moviesListReducer} from "../../../../entities/MoviesList/model/slices/moviesListSlice";
import {movieDetailsReducer} from "../../../../entities/MovieDeatils/model/slices/movieDetailsSlice";
import {expandableFiltersReducer} from "../../../../features/ExpandableFilters/model/slices/expandableFiltersSlice";

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        movies: moviesListReducer,
        movieDetails: movieDetailsReducer,
        expandableFilters: expandableFiltersReducer
    };

    const extraThunk: ThunkExtraArg = {
        api: $mainApi,
        imageApi: $imageApi,
    };


    const store = configureStore({
        reducer: rootReducer,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraThunk,
                },
            }),
    })

    return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
