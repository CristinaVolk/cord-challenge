import {StateSchema} from "../../../../app/providers/StoreProvider";
import {
    getMoviesListError,
    getMoviesListLoading,
    getMoviesListMovies,
    getMoviesListSearch, getMoviesListYear
} from "./getMoviesListSelector";
import {mockedMovies, mockedSearchTerm, mockedYearTerm, mockError} from "../../../../shared/helpers/tests/mockedData";



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
        const state: DeepPartial<StateSchema> = {
            movies: {
                error: mockError
            }
        }

        expect(getMoviesListError(state as StateSchema)).toEqual(mockError)
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