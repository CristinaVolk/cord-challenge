import {StateSchema} from "../../../../app/providers/StoreProvider";
import {getMoviesDetailsError, getMoviesDetailsLoading, getMoviesDetailsPicture} from "./getMovieDetailsSelector";

describe('getMoviesDetailsIsLoading.test', ()=> {
    test('with loading', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                isLoading: true
            }
        }

        expect(getMoviesDetailsLoading(state as StateSchema)).toEqual(true)
    })

    test('with no loading', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                isLoading: false
            }
        }

        expect(getMoviesDetailsLoading(state as StateSchema)).toEqual(false)
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {}
        }

        expect(getMoviesDetailsLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getMoviesDetailsError.test', ()=> {
    test('with error', () => {
        const textError = 'Error occurred'
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                error: textError
            }
        }

        expect(getMoviesDetailsError(state as StateSchema)).toEqual(textError)
    })

    test('with no error', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                error: ''
            }
        }

        expect(getMoviesDetailsError(state as StateSchema)).toEqual('')
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesDetailsError(state as StateSchema)).toEqual('')
    })
})

describe('getMoviesDetailsPicture.test', ()=> {
    test('with value', () => {
        const path = 'xxx/xxx'
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                picturePath: path
            }
        }

        expect(getMoviesDetailsPicture(state as StateSchema)).toEqual(path)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getMoviesDetailsPicture(state as StateSchema)).toEqual('')
    })
})