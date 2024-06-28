import {AxiosInstance} from "axios";
import {MoviesListSchema} from "../../../../components/MoviesList/model/types/MoviesList";
import {ExpandableFiltersSchema} from "../../../../components/ExpandableFilters/model/types/ExpandableFiltersSchema";

export interface StateSchema {
    movies: MoviesListSchema
    expandableFilters: ExpandableFiltersSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}