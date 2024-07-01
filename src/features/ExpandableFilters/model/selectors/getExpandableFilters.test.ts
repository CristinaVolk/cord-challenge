import {StateSchema} from "../../../../app/providers/StoreProvider";
import {
    getExpandableFiltersError,
    getExpandableFiltersGenres, getExpandableFiltersLangs,
    getExpandableFiltersLoading, getExpandableFiltersSelected
} from "./getExpandableFilters";
import {mockedGenreFilters, mockedLangFilters} from "../../../../shared/helpers/tests/mockedData";

describe('getExpandableFiltersLoading.test', ()=> {
    test('with loading', () => {
        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                isLoading: true
            }
        }

        expect(getExpandableFiltersLoading(state as StateSchema)).toEqual(true)
    })

    test('with no loading', () => {
        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                isLoading: false
            }
        }

        expect(getExpandableFiltersLoading(state as StateSchema)).toEqual(false)
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            expandableFilters: {}
        }

        expect(getExpandableFiltersLoading(state as StateSchema)).toEqual(false)
    })
})

describe('getExpandableFiltersError.test', ()=> {
    test('with error', () => {
        const textError = 'Error occurred'
        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                error: textError
            }
        }

        expect(getExpandableFiltersError(state as StateSchema)).toEqual(textError)
    })

    test('with no error', () => {
        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                error: ''
            }
        }

        expect(getExpandableFiltersError(state as StateSchema)).toEqual('')
    })

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getExpandableFiltersError(state as StateSchema)).toEqual('')
    })
})

describe('getExpandableFiltersGenres.test', () => {
    test('with value', () => {

        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                genreFilters: mockedGenreFilters
            }
        }

        expect(
            getExpandableFiltersGenres(state as StateSchema)
        ).toEqual(mockedGenreFilters)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getExpandableFiltersGenres(state as StateSchema)).toEqual( [])
    })
})

describe('getExpandableFiltersLangs.test', () => {
    test('with value', () => {

        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                langsFilters: mockedLangFilters
            }
        }

        expect(
            getExpandableFiltersLangs(state as StateSchema)
        ).toEqual(mockedLangFilters)
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getExpandableFiltersLangs(state as StateSchema)).toEqual( [])
    })
})

describe('getExpandableFiltersSelected.test', () => {
    test('with value', () => {

        const state: DeepPartial<StateSchema> = {
            expandableFilters: {
                selectedFilters: {
                    genres: [1, 2, 3],
                    langs: []
                }
            }
        }

        expect(
            getExpandableFiltersSelected(state as StateSchema)
        ).toEqual({
            genres: [1, 2, 3],
            langs: []
        })
    })

    test('with empty state passed', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(
            getExpandableFiltersSelected(state as StateSchema)
        ).toEqual({ genres: [], langs: []})
    })
})