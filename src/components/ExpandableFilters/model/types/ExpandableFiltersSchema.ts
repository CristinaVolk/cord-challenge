export interface Genre {
    id: number
    name: string
}

export interface Language {
    iso_639_1: string,
    english_name: string,
    name: string
}
export type FiltersType = 'genres' | 'langs'

export interface ExpandableFiltersSchema {
    genreFilters: Array<Genre>
    langsFilters: Array<Language>
    isLoading: boolean
    error: string

    selectedFilters: {
        genres: Array<number>,
        langs: Array<string>
    }
    selectedGenres: Array<number>
}

export interface GetFiltersGenresResponse {
    genres: Array<Genre>
}