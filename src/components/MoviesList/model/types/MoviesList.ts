import {MovieDetails} from "../../../MovieDeatils/model/types/MovieDetails";

export interface MoviesListSchema {
    search: string | undefined,
    year: string | undefined,
    isLoading: boolean,
    error: string,
    movies: Array<MovieDetails> | []
}

export interface GetMovieListResponse {
    page: number
    results: Array<MovieDetails>
    total_pages: number
    total_results: number
}
