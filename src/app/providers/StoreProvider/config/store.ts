import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';

import {moviesListReducer} from "../../../../entities/MoviesList";
import {movieDetailsReducer} from "../../../../entities/MovieDeatils";

import {expandableFiltersReducer} from "../../../../features/ExpandableFilters";

import { $mainApi, $imageApi } from '../../../../shared/api/api';


export function createReduxStore(
    initialState?: DeepPartial<StateSchema> | undefined,
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
