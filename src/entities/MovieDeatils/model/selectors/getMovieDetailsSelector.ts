import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getMoviesDetailsLoading = (state: StateSchema) => state.movieDetails?.isLoading || false;
export const getMoviesDetailsError = (state: StateSchema) => state.movieDetails?.error || '';
export const getMoviesDetailsPicture = (state: StateSchema) => state.movieDetails?.picturePath || '';