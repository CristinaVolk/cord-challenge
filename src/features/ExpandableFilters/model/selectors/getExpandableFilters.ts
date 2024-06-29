import {StateSchema} from "../../../../app/providers/storeProvider/config/StateSchema";

export const getExpandableFiltersLoading = (state: StateSchema) => state.expandableFilters.isLoading;
export const getExpandableFiltersError = (state: StateSchema) => state.expandableFilters.error || '';
export const getExpandableFiltersGenres = (state: StateSchema) => state.expandableFilters.genreFilters || [];
export const getExpandableFiltersLangs = (state: StateSchema) => state.expandableFilters.langsFilters || []

export const getExpandableFiltersSelected = (state: StateSchema) => state.expandableFilters.selectedFilters || { genres: [], langs: [] }