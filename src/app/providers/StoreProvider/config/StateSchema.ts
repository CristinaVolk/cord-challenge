import {AxiosInstance} from "axios";
import {MovieDetailsSchema} from "../../../../entities/MovieDeatils/model/types/MovieDetails";
import {MoviesListSchema} from "../../../../entities/MoviesList/model/types/MoviesList";
import {ExpandableFiltersSchema} from "../../../../features/ExpandableFilters/model/types/ExpandableFiltersSchema";


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