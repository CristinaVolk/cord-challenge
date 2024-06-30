import {StateSchema} from "../../../../app/providers/StoreProvider";
import {
    getMoviesListError,
    getMoviesListLoading,
    getMoviesListMovies,
    getMoviesListSearch, getMoviesListYear
} from "./getMoviesListSelector";

const mockedMovies = [
    {
        adult: true,
        backdrop_path: 'xxx',
        genre_ids: [1,2,3],
        id: 1111,
        original_language: 'en',
        original_title: 'Bad Teacher',
        overview: 'string',
        popularity: 1,
        poster_path: 'string',
        release_date: '01-01-2019',
        title: 'Bad Teacher',
        video: false,
        vote_average: 2,
        vote_count: 2,
    }
]
const mockedSearchTerm = 'ba'
const mockedYearTerm = '2020'

describe('getMovieListSelector Loading', ()=> {
    test('with loading', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                isLoading: true
            }
        }

        expect(getMoviesListLoading(state as StateSchema)).toEqual(true)
    })

    test('with no loading', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                isLoading: false
            }
        }

        expect(getMoviesListLoading(state as StateSchema)).toEqual(false)
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {}
        }

        expect(getMoviesListLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getMovieListSelector Error ', ()=> {
    test('with error', () => {
        const textError = 'Error occurred'
        const state: DeepPartial<StateSchema> = {
            movies: {
                error: textError
            }
        }

        expect(getMoviesListError(state as StateSchema)).toEqual(textError)
    })

    test('with no error', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                error: ''
            }
        }

        expect(getMoviesListError(state as StateSchema)).toEqual('')
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesListError(state as StateSchema)).toEqual('')
    })
})

describe('getMovieListSelector Movies', ()=> {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                movies: mockedMovies
            }
        }

        expect(getMoviesListMovies(state as StateSchema)).toEqual(mockedMovies)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesListMovies(state as StateSchema)).toEqual([])
    })
})

describe('getMovieListSelector Search term', ()=> {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                search: mockedSearchTerm
            }
        }

        expect(getMoviesListSearch(state as StateSchema)).toEqual(mockedSearchTerm)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesListSearch(state as StateSchema)).toEqual('')
    })
})

describe('getMovieListSelector Year term', ()=> {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            movies: {
                year: mockedYearTerm
            }
        }

        expect(getMoviesListYear(state as StateSchema)).toEqual(mockedYearTerm)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesListSearch(state as StateSchema)).toEqual('')
    })
})