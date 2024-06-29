import {StateSchema} from "../../../../app/providers/storeProvider/config/StateSchema";


export const getMoviesDetailsLoading = (state: StateSchema) => state.movieDetails.isLoading;
export const getMoviesDetailsError = (state: StateSchema) => state.movieDetails.error || '';
export const getMoviesDetailsPicture = (state: StateSchema) => state.movieDetails.picturePath || '';