import {useSelector} from "react-redux";
import {
    getExpandableFiltersGenres,
    getExpandableFiltersLangs,
    getExpandableFiltersSelected
} from "../selectors/getExpandableFilters";
import {useAppDispatch} from "../../../../shared/hooks/useAppDispatch/useAppDispatch";
import {expandableFiltersActions} from "../slices/expandableFiltersSlice";
import {CheckBoxItem} from "../../../../shared/UI/CheckBoxItem/ui/CheckBoxItem";
import {languagesAvailable} from "../consts/filters";
import {VStack} from "../../../../shared/UI/Stack";
import classes from "../../ui/ExpandableFilters.module.scss";
import {FiltersListBox} from "../../../../shared/UI/FiltersListBox/FiltersListBox";

export const useExpandableFilters = () => {
    const genresFilters = useSelector(getExpandableFiltersGenres);
    const langsFilters = useSelector(getExpandableFiltersLangs)
    const selectedFilters = useSelector(getExpandableFiltersSelected)
    const dispatch = useAppDispatch()

    const onSelectFilter = (id: number | string, type: keyof typeof selectedFilters) => {
        // @ts-ignore
        const currentIndex = selectedFilters[type].indexOf(id);
        const newSelected = [...selectedFilters[type]];
        const newFilters = {...selectedFilters}

        if (currentIndex === -1) {
            newSelected.push(id)
        } else {
            newSelected.splice(currentIndex, 1)
        }
        // @ts-ignore
        newFilters[type] = newSelected
        dispatch(expandableFiltersActions.setSelectedFilters(newFilters))
    }

    const genreItems = genresFilters.map(({id, name}) =>
        <CheckBoxItem
            key={id}
            checked={(selectedFilters.genres?.indexOf(id) !== -1)}
            onChange={() => onSelectFilter(id as number, 'genres')}
            name={name}
            checkedMode={(selectedFilters.genres?.indexOf(id) !== -1)}
        />
    )

    const langItems = langsFilters
        .filter(({iso_639_1}) => languagesAvailable.indexOf(iso_639_1) !== -1)
        .map(({iso_639_1, english_name}) => (
                <CheckBoxItem
                    key={iso_639_1}
                    checked={(selectedFilters.langs?.indexOf(iso_639_1) !== -1)}
                    onChange={() => onSelectFilter(iso_639_1, 'langs')}
                    checkedMode={(selectedFilters.langs?.indexOf(iso_639_1) !== -1)}
                    name={english_name}
                />
            )
        )

    const filterItems = [
        {
            id: 1,
            content: (
                <VStack gap='15' className={classes.ExpandableFilters}>
                    <h5>Movie</h5>
                    {genresFilters.length &&
                        <VStack gap='10'>
                            <FiltersListBox
                                listBoxTitle="Select genre(s)"
                                listBoxItems={genreItems}
                            />
                        </VStack>
                    }
                    {langsFilters.length &&
                        <VStack gap='10'>
                            <FiltersListBox
                                listBoxTitle="Select language"
                                listBoxItems={langItems}
                            />
                        </VStack>
                    }
                </VStack>
            )
        },
    ]

    return {
        genresFilters,
        genreItems,
        langsFilters,
        langItems,
        filterItems
    }
}