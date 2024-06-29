import {VStack} from "../../../shared/UI/Stack";
import {FiltersListBox} from "../../../shared/UI/FiltersListBox/FiltersListBox";
import {useExpandableFilters} from "../model/hooks/useExpandableFilters";

import classes from "./ExpandableFilters.module.scss";

export const ExpandableFiltersBrowser = () => {
    const {
        genresFilters,
        genreItems,
        langsFilters,
        langItems
    } = useExpandableFilters();


    return (
        <VStack gap='15' className={classes.ExpandableFilters}>
            <h5>Movie</h5>
            {genresFilters.length &&
                <VStack gap='10' max>
                    <FiltersListBox
                        listBoxTitle="Select genre(s)"
                        listBoxItems={genreItems}
                    />
                </VStack>
            }
            {langsFilters.length &&
                <VStack gap='10' max>
                    <FiltersListBox
                        listBoxTitle="Select language"
                        listBoxItems={langItems}
                    />
                </VStack>
            }
        </VStack>
    )
}