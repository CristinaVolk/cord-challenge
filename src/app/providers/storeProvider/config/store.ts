import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from '../../../../shared/api/api';
import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';
import {moviesListReducer} from "../../../../components/MoviesList/model/slices/moviesListSlice";
import {expandableFiltersReducer} from "../../../../components/ExpandableFilters/model/slices/expandableFiltersSlice";

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        movies: moviesListReducer,
        expandableFilters: expandableFiltersReducer
    };

    const extraThunk: ThunkExtraArg = {
        api: $api,
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
