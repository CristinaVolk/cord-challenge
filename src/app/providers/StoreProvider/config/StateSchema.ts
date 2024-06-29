import {AxiosInstance} from "axios";

import {MoviesListSchema} from "../../../../entities/MoviesList";
import {ExpandableFiltersSchema} from "../../../../features/ExpandableFilters";
import {MovieDetailsSchema} from "../../../../entities/MovieDeatils";


export interface StateSchema {
    movies: MoviesListSchema
    movieDetails: MovieDetailsSchema
    expandableFilters: ExpandableFiltersSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    imageApi?: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}