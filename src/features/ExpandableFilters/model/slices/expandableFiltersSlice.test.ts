import {ExpandableFiltersSchema} from "../types/ExpandableFiltersSchema";
import {expandableFiltersActions, expandableFiltersReducer} from "./expandableFiltersSlice";
import {fetchGenres} from "../services/fetchGenres";


describe('expandableFiltersSlice.test', () => {
    test('with value', () => {
        const state: DeepPartial<ExpandableFiltersSchema> = {
            selectedFilters: {
                genres: [1, 3, 4],
                langs: ['en', 'es']
            }
        };
        const mockedState: DeepPartial<ExpandableFiltersSchema> = {
            selectedFilters: {
                genres: [1, 3, 4],
                langs: ['en', 'es']
            }
        }

        expect(
            expandableFiltersReducer(
                state as ExpandableFiltersSchema,
                expandableFiltersActions.setSelectedFilters({
                    genres: [1, 3, 4],
                    langs: ['en', 'es']
                })
            ),
        ).toEqual(mockedState);
    });

    test('pending state', () => {
        const state: DeepPartial<ExpandableFiltersSchema> = {
            isLoading: true,
        };
        const expectedState: DeepPartial<ExpandableFiltersSchema> = {
            isLoading: true,
            error: ""
        }

        expect(
            // @ts-ignore
            expandableFiltersReducer(state as ExpandableFiltersSchema, fetchGenres.pending)
        ).toEqual(expectedState);
    });
});
